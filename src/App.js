import './App.css';
import Employee from './components/Emporyee';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <div className="flex flex-wrap">
      <Employee name = 'Caleb' role ='junkyard' image='https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'/>
        <Employee name = 'Jena' image='https://images.unsplash.com/photo-1512663150964-d8f43c899f76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1984&q=80' />
        <Employee name = 'Alisa' role='Boss' image = 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80'/>
        <Employee name = 'Caleb' role ='junkyard'/>
        <Employee name = 'Jena'/>
        <Employee name = 'Alisa' role='Boss'/>
        <Employee name = 'Caleb' role ='junkyard'/>
        <Employee name = 'Jena'/>
      </div>
    </div>
  );
}

export default App;
