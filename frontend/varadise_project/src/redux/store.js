import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/reducer";
import { loadingReducer } from "./loading/reducer";
import { buildingsReducer } from "./buildings/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  buildings: buildingsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
