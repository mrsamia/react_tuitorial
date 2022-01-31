import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Arrow_function from './components/Arrow_function';
import Button_event_Handlr from './components/Button_event_Handlr';
import Functional_cmpnt from './components/Functional_cmpnt';
import Arrow_fnctn_clck_evnt from './components/Arrow_fnctn_clck_evnt';
import Button from './components/Button';
import State from './components/State';
import State_2_practice from './components/State_2_practice';
import State_practice_3 from './components/State_practice_3';
import Set_state from './components/Set_state';

function App() {
  return (
    <div className="App">
      <h1>React</h1>
      <Functional_cmpnt name="samia" country="Bangla"/>
      <Button_event_Handlr/><br></br>
      <Arrow_function/><br></br>
     <Arrow_fnctn_clck_evnt/><br></br>
     
     <Button name="Props Button 1"/><br></br>
     <Button name="Props Button 2"/>
     <State/>
     <State_2_practice/>
     <State_practice_3/>
     <Set_state/>
     
    </div>
  );
}

export default App;
