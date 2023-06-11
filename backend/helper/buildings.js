import { DataSource } from "typeorm";
import { getQuery } from "../query/getQuery.js";

import { dbConnection } from "../db/connection.js";

export const getSQLQueryResultFromDB = async (queryLabel) => {
  const AppDataSource = dbConnection();
  const appDataSource = await AppDataSource.initialize();
  const queryRunner = await appDataSource.createQueryRunner();
  return await queryRunner.manager.query(getQuery(queryLabel));
};

