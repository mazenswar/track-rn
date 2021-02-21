import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case 'login':
      console.log('from reducer ===== ', payload);
      return { errorMessage: null, token: payload.token };
    case 'logout':
      return { errorMessage: null, token: null };
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

      await AsyncStorage.setItem('token', response.data.token);
      dispatch({
        type: 'login',
        payload: response.data,
      });
      navigate('mainFlow');
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
  { token: null, errorMessage: null }
);
