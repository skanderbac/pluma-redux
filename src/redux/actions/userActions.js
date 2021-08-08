import {
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_RESET,
  USER_DETAILS_RESET,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_REQUEST,
  USER_LOGIN_SUCCESS, NOTIFY, LOGIN
} from "./types";
import axios from "axios";
import{logout} from "./authActions";
import jwt from "jwt-decode";
export const editUser = (request_data) => {


  return async (dispatch) => {
    try {
      dispatch({
        type: NOTIFY,
        payload: { loading: true },
      });
      await axios({
        method: "PUT",
        url: `https://pluma.ai/api/update`,
        data: request_data,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((res) => {
        console.log(res)
        if (res.data.access_token) {
          console.log("token: ", res.data);
          localStorage.setItem("token", res.data.access_token);
          const token = res.data.access_token;
          const user = jwt(token);
          console.log("userconnected: " + JSON.stringify(user));
          dispatch({
            type: LOGIN,
            payload: { access_token: res.data.access_token, user: JSON.stringify(user) },
          });
          dispatch({
            type: NOTIFY,
            payload: { success: true },
          });
        } else {
          dispatch({
            type: LOGIN,
            payload: {
              error: res.data,
            },
          });
          dispatch({
            type: NOTIFY,
            payload: { error: true },
          });
          console.log("error: ", res.data);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };
  };/*
  export const updateUser = (user) => {
    const userId = user.id;
    return (dispatch) => {
      return axios.patch(`https://pluma.ai/api/${user.id}.json`, {})
        .then(response => {
          const data = response.data;
          dispatch({type: UPDATE_USER, payload: {}})
        })
        .then(() => {
          history.push(`/update/${userId}`)
        })
        .catch(error => { throw(error) });
    };
  };
  export function updateUser(user) {
    return dispatch => {
      return dispatch({
        type: 'UPDATE_USER',
        payload: user.put(`https://pluma.ai/api/${user._id}`, user)
      })
    }
  }*/
  export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_DETAILS_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.get(`/api/users/${id}`, config)
  
      dispatch({
        type: USER_DETAILS_SUCCESS,
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: USER_DETAILS_FAIL,
        payload: message,
      })
    }
  }
  export const updateProfile = (user) => {

    return async (dispatch,getState) => {

      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
      console.log(config);
      console.log(user)
      try {
        dispatch({
          type: NOTIFY,
          payload: { loading: true },
        });
        await axios({
          method: "POST",
          url: `https://pluma.ai/api/update`,
          data: user,
          headers: { "Content-Type": "multipart/form-data" },
          config: config,
        }).then((res) => {
          console.log(res)
        });
      } catch (e) {
        console.log(e);
      }
    };
  };

export const updatePassword = (pwd) => {

  return async (dispatch,getState) => {

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
    console.log(config);
    console.log(pwd)
    try {
      dispatch({
        type: NOTIFY,
        payload: { loading: true },
      });
      await axios({
        method: "POST",
        url: `https://pluma.ai/api/updatepwd`,
        data: pwd,
        headers: { "Content-Type": "multipart/form-data" },
        config: config,
      }).then((res) => {
        console.log(res)
      });
    } catch (e) {
      console.log(e);
    }
  };
};

  export const updateUserProfile = (user) => async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_UPDATE_PROFILE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.state.token.accessToken,
        },
      }
  
      const { data } = await axios.put(`https://pluma.ai/api/update`, user, config)
      console.log(userInfo);
      console.log(user)
      dispatch({
        type: USER_UPDATE_PROFILE_SUCCESS,
        payload: data,
      })
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      })
      localStorage.setItem('token', JSON.stringify(data))
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: USER_UPDATE_PROFILE_FAIL,
        payload: message,
      })
    }
  }
