export const userReducer = (state = "", action) => {
  const { type, payload } = action;

  if (type === "@user/login") {
    return {
      ...state,
      user: payload.token,
    };
  }

  if (type === "@user/logout") {
    console.log("logout");
    return {
      ...state,
      user: null,
    };
  }

  return state;
};

export const actionLoginUser = (token) => {
  return {
    type: "@user/login",
    payload: {
      token: token,
    },
  };
};

export const actionLogoutUser = () => {
  return {
    type: "@user/logout",
    payload: {},
  };
};
