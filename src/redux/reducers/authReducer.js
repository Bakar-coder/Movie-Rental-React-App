const authState = {
  isAuth: false,
  user: null
};

export default (state = authState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};
