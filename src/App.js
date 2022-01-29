
import './App.css';
import Functional_cmpnt from './components/Functional_cmpnt';


function App() {
  return (
    <div className="App">
      <h1>React</h1>
      <Functional_cmpnt name="samia" country="Bangla"/>
      <Functional_cmpnt name="sami" country="English" />
      <Functional_cmpnt  name="sam"country="Math" />
      <Functional_cmpnt  name="sa" country="Bangla"/>
    </div>
  );
}

export default App;
