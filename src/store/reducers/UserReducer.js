const initialState = {
  name: null,
  email: null,
  token: null,
};

const UserReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (action.type) {
    default:
      return state;
  }
};

export default UserReducer;
