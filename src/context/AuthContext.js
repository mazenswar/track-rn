import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case 'login':
      return { ...state, ...payload };
    case 'logout':
      return {};
    case 'add_error':
      return { ...state, errorMessage: payload };
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
      dispatch({ type: 'add_error', payload: 'Ops! Something went wrong' });
    }
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerAPI.post('/signin', { email, password });
      console.log(response.data);
    } catch (e) {
      dispatch({ type: 'add_error', payload: 'Ops! Something went wrong' });
    }
  };
};

const signout = (dispatch) => {
  return () => {
    dispatch({ type: 'signout' });
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { isSignedIn: false, errorMessage: null }
);
