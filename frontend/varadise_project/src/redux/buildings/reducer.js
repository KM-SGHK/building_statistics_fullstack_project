const initialState = {
  euiData: [],
  buildingsData: [],
};

export function buildingsReducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_EUI_DATA":
      return {
        ...state,
        euiData: action.euiData
      };
    case "LOAD_BUILDINGS_DATA":
      return {
        ...state,
        buildingsData: action.buildingsData
      }
    default:
      return state;
  }
}
