
import './App.css';
import Button_event_Handlr from './components/Button_event_Handlr';
import Functional_cmpnt from './components/Functional_cmpnt';



function App() {
  return (
    <div className="App">
      <h1>React</h1>
      <Functional_cmpnt name="samia" country="Bangla"/>
      <Button_event_Handlr/>
    </div>
  );
}

export default App;
