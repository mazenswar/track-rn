import createDataContext from './createDataContext';

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case 'signin':
      return state;
    case 'signout':
      return {};
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, password }) => {
    //

    //
    dispatch({ type: 'signup', payload: { email, password } });
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {};
};

const signout = (dispatch) => {
  return () => {
    dispatch({ type: 'signout' });
  };
};

export const { Provider, Contenxt } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { isSignedIn: false }
);
