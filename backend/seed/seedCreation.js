import fs from "fs";
import { getSeedData } from "./getSeedData.js";

// 0. Key Functions
function createSeedForBuildings() {
  let allBuildings = [];
  let eachBuilding = {};

  for (let i = 0; i < 1000; i++) {
    eachBuilding = buildingGenerator(i, eachBuilding);
    allBuildings.push(eachBuilding);
    eachBuilding = {};
  }

  createJsonFile("allBuildings", allBuildings);
}

function createSeedForBuildingsGFA() {
  let allBuildingsGFA = [];
  let eachBuildingGFA = {};

  for (let i = 0; i < 4000; i++) {
    eachBuildingGFA = buildingsGFAGenerator(eachBuildingGFA);
    allBuildingsGFA.push(eachBuildingGFA);
    eachBuildingGFA = {};
  }

  createJsonFile("allBuildingsGFA", allBuildingsGFA);
}

function createSeedForBuildingMetrics() {
  let allBuildingMetrics = [];
  let eachBuildingMetrics = {};
  for (let i = 0; i < 4000; i++) {
    eachBuildingMetrics = getBuildingMetrics(eachBuildingMetrics);
    allBuildingMetrics.push(eachBuildingMetrics);
    eachBuildingMetrics = {};
  }
  createJsonFile("allBuildingMetrics", allBuildingMetrics);
}

// 1. Single Building Data Generation
function buildingGenerator(id, eachBuilding) {
  eachBuilding["id"] = id;
  eachBuilding["location"] = locationGenerator();
  eachBuilding["building_year"] = buildingYearGenerator();
  eachBuilding["primary_property_type"] = primaryPropertyTypeGenerator();
  return eachBuilding;
}

// 1.1. helper functions
function locationGenerator() {
  let locations = ["Hong Kong Island", "Kowloon", "New Territories"];
  let index = parseInt(Math.random() * 3); // 0, 1, 2
  return locations[index];
}

function buildingYearGenerator() {
  let yearRange = getYearRange(1973, 2023, 1);
  let index = parseInt(Math.random() * (2023 - 1973));
  return yearRange[index];
}

function getYearRange(start, end, step) {
  return Array.from(
    { length: end - start + 1 },
    (value, index) => start + index * step
  );
}

function primaryPropertyTypeGenerator() {
  let primaryPropertyTypes = [
    "Housing",
    "Other",
    "Education",
    "Office",
    "Health",
    "Retail",
    "Leisure",
  ];
  let index = parseInt(Math.random() * 7);
  return primaryPropertyTypes[index];
}

// 2. Single Building GFA Generator
function buildingsGFAGenerator(eachBuildingGFA) {
  eachBuildingGFA["ose_building_id"] = getOSEBuildingID();
  eachBuildingGFA["gross_floor_area"] = getBuildingGFA();
  return eachBuildingGFA;
}

// 2.1. helper function
function getBuildingGFA() {
  let GFARange = getGFARange(500, 10000, 500.255);
  let index = parseInt(Math.random() * (10000 - 500));
  return GFARange[index];
}

function getGFARange(start, end, step) {
  return Array.from(
    { length: end - start + 1 },
    (value, index) => start + index + step
  );
}

// 3. Metrics
function getBuildingMetrics(eachBuildingMetrics) {
  eachBuildingMetrics["ose_building_id"] = getOSEBuildingID();
  eachBuildingMetrics["metric"] = getMetricType();
  eachBuildingMetrics["value"] = parseFloat(Math.random() * 500);
  return eachBuildingMetrics;
}

function getOSEBuildingID() {
  let idRange = Array.from({ length: 1000 }, (value, index) => index);
  let index = parseInt(Math.random() * 1000);
  return idRange[index];
}

function getMetricType() {
  let metricTypes = ["water", "electricity"];
  let index = parseInt(Math.random() * 2);
  return metricTypes[index];
}

// 4. Seed Data Creation
function createJsonFile(fileName, data) {
  fs.writeFile(`${fileName}.json`, JSON.stringify(data), function (err) {
    if (err) throw err;
    console.log("complete");
  });
}

createSeedForBuildings();
createSeedForBuildingsGFA();
createSeedForBuildingMetrics();


