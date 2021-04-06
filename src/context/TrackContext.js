import createDataContext from './createDataContext';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'get_tracks':
      return state;
    case 'create_track':
      return state;
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => () => {};
const createTrack = (dispatch) => (name, locations) => {
  console.log(name, locations.length);
};

export const { Context, Provider } = createDataContext(
  reducer,
  { fetchTracks, createTrack },
  []
);
