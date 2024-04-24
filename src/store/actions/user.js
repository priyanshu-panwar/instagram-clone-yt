import { useSelector } from "react-redux";

import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNUP_SUCCESS,
  UPDATE_SUCCESS,
} from "../constants/constants";
import { BASE_URL } from "../../Constants";

export const signup = (user) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error("could not signup user");
      }
      const data = await response.json();
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: {
          token: data.access_token,
          username: user.username,
        },
      });
    } catch (error) {
      throw error;
    }
  };
};

export const login = (username, password) => {
  return async (dispatch) => {
    try {
      const url = `${BASE_URL}/auth/token`;
      var details = {
        grant_type: "",
        username: username,
        password: password,
        scope: "",
        client_id: "",
        client_secret: "",
      };
      var formBody = [];
      for (var property in details) {
        if (details.hasOwnProperty(property)) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
      }
      formBody = formBody.join("&");
      const reponse = await fetch(url, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody,
      });
      if (!response.ok) {
        throw new Error("could not login user");
      }
      const data = await response.json();
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token: data.access_token,
          username: username,
        },
      });
    } catch (error) {
      throw error;
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch({
      type: LOGOUT_SUCCESS,
    });
  };
};

export const updateUser = (user) => {
  const { username, token } = useSelector((state) => state.user);
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${BASE_URL}/auth/${username}?token=${token}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      if (!response.ok) {
        throw new Error("could not update user");
      }
      dispatch({
        type: UPDATE_SUCCESS,
        payload: {
          name: user.name,
          bio: user.bio,
          location: user.location,
          gender: user.gender,
          profile_pic: user.profile_pic,
        },
      });
    } catch (error) {
      throw error;
    }
  };
};

export const getUser = () => {
  const token = useSelector((state) => state.user.token);
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/profile?token=${token}`, {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("could not fetch user");
      }
      const user = await response.json();
      dispatch({
        type: UPDATE_SUCCESS,
        payload: user,
      });
    } catch (error) {
      throw error;
    }
  };
};
