import { LOGIN } from "../actions/types";

const initialState = {
  data: "",
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      state = { ...state, data: action.payload };
      window.location.replace("/home")
      return state;

    default:
      return state;
  }
}
