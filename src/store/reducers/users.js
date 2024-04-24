import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNUP_SUCCESS,
  UPDATE_SUCCESS,
} from "../constants/constants";

const initialState = {
  token: "",
  username: "",
  profile: {
    id: "",
    name: "",
    email: "",
    bio: "",
    location: "",
    profile_pic: "",
    followers_count: "",
    following_count: "",
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        username: action.payload.username,
      };
    case LOGOUT_SUCCESS:
      return {
        token: "",
        username: "",
        profile: {
          id: "",
          name: "",
          email: "",
          bio: "",
          location: "",
          profile_pic: "",
          followers_count: "",
          following_count: "",
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        username: action.payload.username,
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        profile: {
          name: action.payload.name || state.profile.name,
          bio: action.payload.bio || state.profile.bio,
          location: action.payload.location || state.profile.location,
          profile_pic: action.payload.profile_pic || state.profile.profile_pic,
          id: action.payload.id || state.profile.id,
          email: action.payload.email || state.profile.email,
          followers_count:
            action.payload.followers_count || state.profile.followers_count,
          following_count:
            action.payload.following_count || state.profile.following_count,
        },
      };
  }
};

export default userReducer;
