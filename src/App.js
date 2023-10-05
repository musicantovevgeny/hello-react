import './App.css';
import Employee from './components/Emporyee';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Employee name = 'Caleb' role ='junkyard'/>
        <Employee name = 'Jena'/>
        <Employee name = 'Alisa' role='Boss'/>

      </header>
    </div>
  );
}

export default App;
