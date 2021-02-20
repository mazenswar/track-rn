import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case 'login':
      return payload;
    case 'signout':
      return {};
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerAPI.post('/signup', { email, password });
      console.log(response);
      dispatch({
        type: 'login',
        payload: response.data,
      });
    } catch (e) {
      console.log(e.response.data);
    }
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

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { isSignedIn: false }
);
