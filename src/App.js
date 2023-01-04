import React, { useEffect } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import Countries from './pages/Countries';
import Home from './pages/Home';
import { getPopulation } from './redux/continents/homeSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
  // get population of World '900' and continents 909,908....
    dispatch(getPopulation('900,909,908,935,904,903,905'));
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:idCity" element={<Countries />} />
      </Routes>
    </div>
  );
}

export default App;
