import * as types from "./actionTypes";
const initialState = {
  todo: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_TODO_SUCCESS:
      return {
        ...state,
        todo: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
