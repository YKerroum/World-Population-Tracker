import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import WLD from '../../assets/world.svg';
import AFR from '../../assets/africa.svg';
import LCN from '../../assets/s-america.svg';
import NAC from '../../assets/n_america.svg';
import EUR from '../../assets/europe.svg';
import OCE from '../../assets/oceania.svg';
import ASI from '../../assets/asia.svg';

const images = {
  WLD,
  AFR,
  LCN,
  NAC,
  EUR,
  OCE,
  ASI,
};

export const getPopulation = createAsyncThunk('continentsPopulation/getPopulation', async (dataTargetId) => fetch(`https://population.un.org/dataportalapi/api/v1/data/indicators/49/locations/${dataTargetId}?startYear=2023&endYear=2023&variants=4&sexes=3&pagingInHeader=false&format=json`)
  .then((res) => res.json())
  .then((data) => data.data.map(({
    locationId,
    location, value, iso3,
  }) => (
    {
      id: locationId,
      code: iso3,
      name: location,
      population: value,
      image: images[iso3],
    }
  )))
  .catch((error) => {
    throw new Error(error);
  }));

const continentSlice = createSlice({
  name: 'continentsPopulation',
  initialState: {
    world: [], continents: [], loading: false, refresh: true,
  },
  extraReducers: {
    [getPopulation.pending]: (state) => ({ ...state, loading: true }),
    [getPopulation.fulfilled]: (state, action) => ({
      ...state,
      world: action.payload.splice(0, 1),
      continents: action.payload,
      loading: false,
    }),
    [getPopulation.rejected]: (state) => ({ ...state, loading: false }),
  },
});
export default continentSlice.reducer;
