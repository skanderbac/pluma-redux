import { NOTIFY } from "../actions/types";

const initialState = {};

export default function notifyReducer(state = initialState, action) {
  switch (action.type) {
    case NOTIFY:
      return action.payload;

    default:
      return state;
  }
}
