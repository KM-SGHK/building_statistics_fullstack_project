import { DataSource } from "typeorm";
import { dbConnection } from "../db/connection.js";
import { SystemUser } from "../entity/index.js";
import { postSignUpQuery } from "../query/postQuery.js";
import { getQuery } from "../query/getQuery.js";
import { getUserQuery } from "../query/getQuery.js";
import bcrypt from "bcryptjs";
import jwtSimple from "jwt-simple";
import pkg from "permit";
const { Bearer } = pkg;

const getQueryRunner = async () => {
  const AppDataSource = dbConnection();
  const appDataSource = await AppDataSource.initialize();
  const queryRunner = await appDataSource.createQueryRunner();
  return queryRunner;
};

export const signUpQuery = async (userData) => {
  let queryRunner = await getQueryRunner();
  await queryRunner.manager.query(postSignUpQuery(userData));
  console.log("sign up succeeds");
};

export const getUsers = async (username) => {
  let queryRunner = await getQueryRunner();
  let result = await queryRunner.manager.query(getQuery("checkUser"));

  return result.filter((user) => user.username == username).length > 0;
};

// hash & check password
export async function hashPassword(userData) {
  const SALT_ROUNDS = 10;
  const hash = await bcrypt.hash(userData.password, SALT_ROUNDS);
  userData.password = hash;

  return userData;
}

export async function checkPassword(userData) {
  let userPassword = userData.password;
  let queryRunner = await getQueryRunner();
  let query = await getUserQuery(userData.username);
  let userRecord = await queryRunner.manager.query(query);
  const match = await bcrypt.compare(userPassword, userRecord[0].password);

  return match;
}

// token generation for clients
const jwt = {
  jwtSecret: "Iamasecretthatyoushouldneverrevealtoanyone",
  jwtSession: {
    session: false,
  },
};

export async function createToken(username) {
  let payload = {
    username,
  };
  let token = await jwtSimple.encode(payload, jwt.jwtSecret);

  return token;
}

// route guard middleware for clients' data-fetching
export const routeGuard = () => async (request, response, next) => {
  try {
    let token = await isTokenValid(request);
    if (!token) {
      response
        .status(401)
        .json({ msg: "You do not have the access right - no token." });
    }
    let userRecord = await decodePayload(token);

    if (isUserAvailable(userRecord)) {
      request.user = userRecord[0].username;
      return next();
    }

    if (!isUserAvailable(userRecord)) {
      response.status(500).json({ error: "User is not found" });
    }
  } catch (e) {
    console.log(e);
    response
      .status(401)
      .json({ error: `You do not have the access right - ${e}.` });
  }
};

async function isTokenValid(request) {
  const permit = new Bearer({
    query: "access_token",
  });
  const token = permit.check(request);

  return token;
}

async function decodePayload(token) {
  const payload = jwtSimple.decode(token, jwt.jwtSecret);
  let queryRunner = await getQueryRunner();
  let query = await getUserQuery(payload.username);
  let userRecord = await queryRunner.manager.query(query);
  return userRecord;
}

function isUserAvailable(userRecord) {
  return userRecord.length > 0;
}
