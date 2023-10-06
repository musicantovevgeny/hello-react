import './App.css';
import Employee from './components/Emporyee';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <div className="flex flex-wrap">
      <Employee name = 'Caleb' role ='junkyard'/>
        <Employee name = 'Jena' />
        <Employee name = 'Alisa' role='Boss'/>
        <Employee name = 'Caleb' role ='junkyard'/>
        <Employee name = 'Jena'/>
        <Employee name = 'Alisa' role='Boss'/>
        <Employee name = 'Caleb' role ='junkyard'/>
        <Employee name = 'Jena'/>
        <Employee name = 'Alisa' role='Boss'/>
      </div>
    </div>
  );
}

export default App;
