import AsyncStorage from "@react-native-community/async-storage";
import { postLoginCredentials } from "../../util/api/fetch";

export function loginSuccess(token, user) {
  return {
    type: "LOGIN_SUCCESS",
    token,
    user,
  };
}

export function loginFailed(error) {
  return {
    type: "LOGIN_FAILED",
    error,
  };
}

export function logoutSuccess() {
  return {
    type: "LOGOUT",
  };
}

export function clearError() {
  return {
    type: "CLEAR_ERROR",
  };
}

export function logout() {
  return async (dispatch, getState) => {
    await AsyncStorage.removeItem("token");
    dispatch(logoutSuccess());
  };
}

export function failedLogin(error) {
  return (dispatch) => {
    dispatch(loginFailed(error));
  };
}

export function resetError() {
  return (dispatch) => {
    dispatch(clearError());
  };
}

// redux thunk
export function login(username, password) {
  return async (dispatch, getState) => {
    try {
      const res = await postLoginCredentials(username, password);
      const json = await res.json();

      if (res.status !== 200) {
        return dispatch(loginFailed(json.error));
      }

      if (!json.token) {
        return dispatch(loginFailed("No Token Fetched"));
      }

      await AsyncStorage.setItem("token", json.token);
      dispatch(loginSuccess(json.token, json.user));
    } catch (e) {
      console.error(e);
      dispatch(loginFailed("Network Error"));
    }
  };
}
