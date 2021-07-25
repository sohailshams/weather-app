import React from 'react';
import './App.css';
import Weather from './components/Weather';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <div className="app__bodyBackground">
          <h1>Weather App</h1>
          <Weather />
        </div>
      </div>
    </div>
  );
}

export default App;
