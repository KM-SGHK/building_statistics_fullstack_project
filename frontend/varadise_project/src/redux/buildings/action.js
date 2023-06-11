export function saveEUI(euiData) {
  return {
    type: "LOAD_EUI_DATA",
    euiData,
  };
}

export function saveBuildings(buildingsData) {
  return {
    type: "LOAD_BUILDINGS_DATA",
    buildingsData,
  };
}

export function loadEUI(euiData) {
  return (dispatch) => {
    dispatch(saveEUI(euiData));
  };
}

export function loadBuildings(buildingsData) {
  return (dispatch) => {
    dispatch(saveBuildings(buildingsData));
  };
}
