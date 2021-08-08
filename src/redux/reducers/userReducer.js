import { user } from "../actions";
import { USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,  USER_UPDATE_PROFILE_RESET,
} from "../actions/types";
const initialState = {
  loading: false,
    users: [],
    errors: {}
  };

 
/*export default function authReducer(state = initialState, action={}) {
    switch (action.type) {
      case 'UPDATE_CONTACT_PENDING': {
        return {
          ...state,
          loading: true
        }
      }
  
      case 'UPDATE_CONTACT_FULFILLED': {
        const contact = action.payload.data;
        return {
          ...state,
          users: state.users.map(item => item._id === user._id ? user : item),
          errors: {},
          loading: false
        }
      }
  
      case 'UPDATE_CONTACT_REJECTED': {
        const data = action.payload.response.data;
        const { "name.first":firstname, "name.last":lastname } = data.errors;
        const errors = { global: data.message, name: { firstname,lastname }};
        return {
          ...state,
          errors: errors,
          loading: false
        }
      }
      default:
        return state;
    }
  }*/
  export default function userUpdateProfileReducer (state = {}, action){
    switch (action.type) {
      case USER_UPDATE_PROFILE_REQUEST:
        return { loading: true }
      case USER_UPDATE_PROFILE_SUCCESS:
        return { loading: false, success: true, token: action.payload }
      case USER_UPDATE_PROFILE_FAIL:
        return { loading: false, error: action.payload }
      case USER_UPDATE_PROFILE_RESET:
        return {}
      default:
        return state
    }
  }