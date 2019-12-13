import {} from "../actions/types";

const authState = {
  isAuth: false,
  user: null,
  errors: null
};

export default (state = authState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};
