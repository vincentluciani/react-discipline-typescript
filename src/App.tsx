import React from 'react';
import logo from './logo.svg';
import './App.css';
import FilterBox from './components/common/FilterBox/FilterBox'
import HabitBox from './components/Habits/HabitBox.js';

function App() {
  return (
    <div className="App">
     <FilterBox />
     <HabitBox boxTitle='test title'/>
    </div>
  );
}

export default App;
