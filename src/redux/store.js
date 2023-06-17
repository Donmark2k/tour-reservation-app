import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import reservationReducer from './reservationSlice';

const logger = createLogger({
  // Options for the logger can be passed here
  // Show only the actions in the console
  predicate: (getState, action) => action.type !== 'SOME_ACTION',
  // Collapse the logs by default
  collapsed: true,
});

export const store = configureStore({
  reducer: {
    reservations: reservationReducer,
    // rockets: rocketReducer,# Another reducer can be here
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;