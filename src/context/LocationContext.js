import createDataContext from './createDataContext';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'add_current_location':
      return { ...state, currentLocation: payload };
    case 'add_location':
      return { ...state, locations: [...state.locations, payload] };
    case 'start_recording':
      return { ...state, recording: true };
    case 'stop_recording':
      return { ...state, recording: false };
    case 'change_name':
      return { ...state, name: payload };
    default:
      return state;
  }
};
const changeName = (dispatch) => (name) => {
  dispatch({ type: 'change_name', payload: name });
};
const startRecording = (dispatch) => () => {
  dispatch({ type: 'start_recording' });
};
const stopRecording = (dispatch) => () => {
  dispatch({ type: 'stop_recording' });
};
const addLocation = (dispatch) => (location, recording) => {
  dispatch({ type: 'add_current_location', payload: location });
  if (recording) {
    dispatch({ type: 'add_location', payload: location });
  }
};

export const { Context, Provider } = createDataContext(
  reducer,
  { startRecording, stopRecording, addLocation, changeName },
  { recording: false, locations: [], currentLocation: null, name: '' }
);
