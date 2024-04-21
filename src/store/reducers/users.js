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
  return state;
};

export default userReducer;
