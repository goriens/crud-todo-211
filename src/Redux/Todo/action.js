import axios from "axios";
import * as Types from "./actionTypes";

export const getTodoRequest = () => {
  return {
    type: Types.GET_TODO_REQUEST,
  };
};
export const getTodoSuccess = (payload) => {
  return {
    type: Types.GET_TODO_SUCCESS,
    payload,
  };
};
export const getTodoFailure = () => {
  return {
    type: Types.GET_TODO_FAILURE,
  };
};
export const getTodo = (dispatch) => {
  dispatch(getTodoRequest());
  axios
    .get("http://localhost:8080/todos")
    .then((r) => dispatch(getTodoSuccess(r.data)))
    .catch((e) => dispatch(getTodoFailure(e)));
};

//add todo
export const addTodoRequest = () => {
  return {
    type: Types.ADD_TODO_REQUEST,
  };
};
export const addTodoSuccess = () => {
  return {
    type: Types.ADD_TODO_SUCCESS,
  };
};
export const addTodoFailure = () => {
  return {
    type: Types.ADD_TODO_FAILURE,
  };
};

//export const
