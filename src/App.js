import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Cities from './pages/Cities';
import Countries from './pages/Countries';

function App() {
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