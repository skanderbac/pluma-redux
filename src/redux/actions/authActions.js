import { LOGIN, LOGOUT, NOTIFY } from "./types";
import axios from "axios";
import jwt from "jwt-decode";

export const signIn = (request_data) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: NOTIFY,
        payload: { loading: true },
      });
      await axios({
        method: "POST",
        url: `https://pluma.ai/api/login`,
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
};
 
export const logout = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: LOGOUT,
        payload: { loading: true },
      });
      await axios({
        method: "POST",
        url: `https://pluma.ai/api/logout`,
        headers: {'Authorization': "Bearer " + window.localStorage.getItem('token') },
        }).then((res) => {
       

        window.localStorage.removeItem('token');
        console.log("logout");
          } );
        }  catch (e) {
console.log(e);   }
        };
      };
