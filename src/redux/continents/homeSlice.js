import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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
    }
  )))
  .catch((error) => {
    throw new Error(error);
  }));

const continentSlice = createSlice({
  name: 'continentsPopulation',
  initialState: { continents: [], loading: false, refresh: true },
  extraReducers: {
    [getPopulation.pending]: (state) => ({ ...state, loading: true }),
    [getPopulation.fulfilled]: (state, action) => ({
      ...state,
      continents: action.payload,
      loading: false,
    }),
    [getPopulation.rejected]: (state) => ({ ...state, loading: false }),
  },
});
export default continentSlice.reducer;
