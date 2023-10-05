import './App.css';
import Employee from './components/Emporyee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('dev')

  return (
    <div className="App">
      <input type='text' onChange={(e) =>
      {
        // console.log(e.target.value);
        setRole(e.target.value);
      } }/>
        <Employee name = 'Caleb' role ='junkyard'/>
        <Employee name = 'Jena' role={role}/>
        <Employee name = 'Alisa' role='Boss'/>
    </div>
  );
}

export default App;
