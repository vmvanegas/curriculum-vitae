import React from 'react';
/* COMPONENTS */
import Switch from './components/Switch/Switch'
import PrintButton from './components/PrintButton/PrintButton';
import CurriculumVitae from './pages/curriculum-vitae/CurriculumVitae';
/* MATERIAL UI COMPONENTS */
import './App.css';

function App() {

  return (
    <div className="App">
      <Switch />
      <PrintButton ContentToPrint={CurriculumVitae}/>
    </div>
  );
}

export default App;
