import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case 'login':
      return { errorMessage: null, token: payload.token };
    case 'logout':
      return { errorMessage: null, token: null };
    case 'add_error':
      return { ...state, errorMessage: payload };
    case 'clear_errors':
      return { ...state, errorMessage: null };
    case 'signout':
      return { errorMessage: null, token: null };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'login', payload: token });
    navigate('TrackList');
  } else {
    navigate('loginFlow');
  }
};

const clearErrorMessages = (dispatch) => () => {
  dispatch({ type: 'clear_errors' });
};

const signup = (dispatch) => async ({ email, password }) => {
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

const signin = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerAPI.post('/signin', { email, password });
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

const signout = (dispatch) => async () => {
  console.log('');
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' });
  navigate('Signin');
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessages, tryLocalSignin },
  { token: null, errorMessage: null }
);
