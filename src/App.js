import './App.css';
import Employee from './components/Emporyee';
import { useState } from 'react';

function App() {

  return (
    <div className="App">

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
  );
}

export default App;
