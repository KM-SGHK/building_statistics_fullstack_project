import { DataSource } from "typeorm";
import { getQuery } from "../query/getQuery.js";
import { dbConnection } from "../db/connection.js";
import { getSQLQueryResultFromDB } from "../helper/buildings.js";

export class BuildingsService {
  constructor() {}

  async getEUIFromDB() {
    try {
      let data = await getSQLQueryResultFromDB("eui");
      return {
        isFetchingSuccessful: true,
        data,
      };
    } catch (e) {
      return {
        isFetchingSuccessful: false,
        error: e.message,
      };
    }
  }

  async getBuildingsFromDB() {
    try {
      let data = await await getSQLQueryResultFromDB("buildings");
      return {
        isFetchingSuccessful: true,
        data,
      };
    } catch (e) {
      return {
        isFetchingSuccessful: false,
        error: e.message,
      };
    }
  }
}
