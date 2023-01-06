import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import continentsPopulation from './continents/homeSlice';
import countryPopulation from './countries/countriesSlice';

const store = configureStore({
  reducer: {
    continentsPopulation,
    countryPopulation,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
