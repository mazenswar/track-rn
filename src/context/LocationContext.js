import { createDataContext } from './createDataContext';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'get_location':
      return payload;
    default:
      return state;
  }
};

const actions = {};
const initialState = {
  recording: false,
  locations: [],
  currentLocation: null,
};
export const { Context, Provider } = createDataContext(
  reducer,
  actions,
  initialState
);
