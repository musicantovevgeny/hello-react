import './App.css';
import Employee from './components/Emporyee';
import { useState } from 'react';



function App() {

  const [employees, setEmployees] = useState(
    [
      {
        name: 'Caleb', 
        role:'Developer', 
        img:'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
      },
      {
        name: 'Jena', 
        role:'Data Scientist', 
        img: 'https://images.pexels.com/photos/2743754/pexels-photo-2743754.jpeg'
      },
      {
        name: 'Alisa', 
        role:'Boss', 
        img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
      },
      {
        name: 'Caleb', 
        role:'Developer', 
        img:'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
      },
      {
        name: 'Jena', 
        role:'Data Scientist', 
        img: 'https://images.pexels.com/photos/2743754/pexels-photo-2743754.jpeg'
      },
      {
        name: 'Alisa', 
        role:'Boss', 
        img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
      }
    ]
  )
  console.log(employees);

  return (
    <div className="App">
      <div className="flex flex-wrap">
        {employees.map((employee)=> {
          return (<Employee name={employee.name} role={employee.role} img={employee.img} />)
        })}
      </div>
    </div>
  );
}

export default App;
