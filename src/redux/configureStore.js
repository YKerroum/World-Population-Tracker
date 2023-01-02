import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import population from './countries/homeSlice';

const store = configureStore({
  reducer: {
    population,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
