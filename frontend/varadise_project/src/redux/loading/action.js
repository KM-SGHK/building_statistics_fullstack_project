export function switchOnLoadSpinner() {
  return {
    type: "START_LOADING",
  };
}

export function switchOffLoadSpinner() {
  return {
    type: "STOP_LOADING",
  };
}

export function startLoading() {
  return (dispatch) => {
    dispatch(switchOnLoadSpinner());
  };
}

export function stopLoading() {
  return (dispatch) => {
    dispatch(switchOffLoadSpinner());
  };
}
