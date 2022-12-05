import * as types from "./action.type";
import axios from "axios";

export const registerAPI = (params) => (dispatch) => {
  return axios.post("http://localhost:5000/register", params).then((res) => {
    dispatch({ type: types.USER_REGISTER });
  });
};

export const loginApi = (params) => (dispatch) => {
  dispatch({ type: types.USER_LOGIN_REQUEST });
  return axios
    .post("http://localhost:5000/login", params)
    .then((res) => {
      dispatch({ type: types.USER_LOGIN_SUCCESS, payload: res.data });
      return types.USER_LOGIN_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.USER_LOGIN_FAILURE, payload: err });
      return types.USER_LOGIN_FAILURE;
    });
};
