import {
  signUpQuery,
  getUsers,
  hashPassword,
  checkPassword,
  createToken,
} from "../helper/auth.js";

export class AuthService {
  constructor() {}

  async signUp(userData) {
    let isUserAvailable = await getUsers(userData.username);

    if (isUserAvailable)
      return {
        isSignUpCompleted: false,
        error: "User already exists",
      };

    if (!isUserAvailable) {
      let userDataWithHashedPassword = await hashPassword(userData);
      await signUpQuery(userDataWithHashedPassword);
    }
    
    return {
      isSignUpCompleted: true,
      error: null,
    };
  }

  async signIn(userData) {
    let isUserAvailable = await getUsers(userData.username);
    let isValidPassword = await checkPassword(userData);

    if (!isUserAvailable)
      return {
        isSignInCompleted: false,
        error: "Username is not found",
      };

    if (!isValidPassword)
      return {
        isSignInCompleted: false,
        error: "Password is incorrect",
      };

    if (isUserAvailable && isValidPassword) {
      let token = await createToken(userData.username);
      return {
        isSignInCompleted: true,
        user: userData.username,
        token,
      };
    }
  }
}
