import React, { useEffect } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import Cities from './pages/Cities';
import Countries from './pages/Countries';
import { getPopulation } from './redux/continents/homeSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopulation('900,909,908,935,904,903,905'));
  }, [dispatch]);

  return (
    <div className="App">
      <div className="contentContainer">
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/:idCity" element={<Cities />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
