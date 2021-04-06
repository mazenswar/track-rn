import createDataContext from './';

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
const createTrack = (dispatch) => () => {};

export const { Context, Provider } = createDataContext(
  reducer,
  { fetchTracks, createTrack },
  []
);
