import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Arrow_function from './components/Arrow_function';
import Button_event_Handlr from './components/Button_event_Handlr';
import Functional_cmpnt from './components/Functional_cmpnt';
import Arrow_fnctn_clck_evnt from './components/Arrow_fnctn_clck_evnt';


function App() {
  return (
    <div className="App">
      <h1>React</h1>
      <Functional_cmpnt name="samia" country="Bangla"/>
      <Button_event_Handlr/><br></br>
      <Arrow_function/><br></br>
     <Arrow_fnctn_clck_evnt/>
     
    </div>
  );
}

export default App;
