import * as typeorm from "typeorm";
import { getSeedData } from "./getSeedData.js";
import {
  Buildings,
  BuildingsGFA,
  Metrics,
  SystemUser,
} from "../entity/index.js";
import { dbConnection } from "../db/connection.js";

const appDataSource = dbConnection();

// Key Function
async function loadSeedData() {
  let dataSource = await appDataSource.initialize();
  let buildingsRepository = await appDataSource.getRepository(Buildings);
  let buildingsGFARepository = await appDataSource.getRepository(BuildingsGFA);
  let buildingsMetricsRepository = await appDataSource.getRepository(Metrics);
//   let userRepository = await appDataSource.getRepository(SystemUser);

  await buildingsRepository.insert(getSeedData("allBuildings"));
  await buildingsGFARepository.insert(getSeedData("allBuildingsGFA"));
  await buildingsMetricsRepository.insert(getSeedData("allBuildingsMetrics"));
//   await userRepository.save({
//     username: "testing4",
//     password: "1234",
//   });
  console.log("data entries complete");
}

// Call Function
loadSeedData();
