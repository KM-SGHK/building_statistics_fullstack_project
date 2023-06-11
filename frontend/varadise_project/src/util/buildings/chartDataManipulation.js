// 1. Edit EUI Values
export function valueRounder(averageEUI) {
  return parseFloat(averageEUI.toFixed(3));
}

export function restructureEUIValues(buildingsEUI) {
  let editedBuildingsEUI = [];
  for (let eachBuildingEUI of buildingsEUI) {
    editedBuildingsEUI.push(editEachBuildingEUI(eachBuildingEUI));
  }
  return editedBuildingsEUI;
}

export function editEachBuildingEUI(data) {
  let adjustedValue = valueRounder(data);
  let adjustedColor = valueRounder(data) > 80 ? "red" : "blue";
  let newDataStructure = {
    value: adjustedValue,
    itemStyle: {
      color: adjustedColor,
    },
  };
  return newDataStructure;
}

// 2. Extraction
export function extractPrimaryPropertyTypes(buildingsEUIDataset) {
  return buildingsEUIDataset.map((data) => data.primary_property_type);
}

export function extractEUIValues(buildingsEUIDataset) {
  return buildingsEUIDataset.map((data) => data.average_eui);
}
