import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCountryPopulation = createAsyncThunk('countryPopulation/getCountryPopulation', async (continentName) => Promise.all([1, 2, 3].map((id) => fetch(`https://population.un.org/dataportalapi/api/v1/locationsWithAggregates?pageNumber=${id}&pageSize=1000&format=json`)
  .then((res) => res.json())
  .then((data) => data)
  .catch((error) => {
    throw new Error(error);
  })))
  .then((data) => {
    const newData = [...new Set(data.flat())];
    return newData.filter((country) => country.Region === continentName)
      .map(({
        Id,
      }) => (
        {
          Id,
        }
      ));
  })
  .then((countries) => Promise.all(countries.map((country) => fetch(`https://population.un.org/dataportalapi/api/v1/data/indicators/49/locations/${country.Id}?startYear=2023&endYear=2023&variants=4&sexes=3&pagingInHeader=false&format=json`)
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
    )))))
    .then((data) => data.flat()))
  .catch((error) => {
    throw new Error(error);
  }));

const countriesSlice = createSlice({
  name: 'countryPopulation',
  initialState: { countries: [], loading: false, refresh: true },
  extraReducers: {
    [getCountryPopulation.pending]: (state) => ({ ...state, loading: true }),
    [getCountryPopulation.fulfilled]: (state, action) => ({
      ...state,
      countries: action.payload,
      loading: false,
    }),
    [getCountryPopulation.rejected]: (state) => ({ ...state, loading: false }),
  },
});
export default countriesSlice.reducer;
