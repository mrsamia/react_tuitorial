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
import Conditional_return from './components/Conditional_return';
import Conditional_return_2 from './components/Conditional_return_2';
import Condition_prac_3 from './components/Condition_prac_3';
import Header from './component_practice/Header';
import Buttton from './component_practice/Buttton';
import Click_event from './component_practice/Click_event';
import Passing_argu from './component_practice/Passing_argu';
import Arrrow_function from './component_practice/Arrrow_function';
import Sttate from './component_practice/Sttate';
import SET_STATE from './component_practice/SET_STATE';
import Condittion from './component_practice/Condittion';
import Form from './components/Form';
import Onchange from './component_3/Onchange';
import Onchange_2 from './component_3/Onchange_2';
import Mul_onchge from './component_3/Mul_onchge';
import Onsubmit from './component_3/Onsubmit';
import Mul_onchange_2 from './component_3/Mul_onchange_2';
import Textarea from './component_3/Textarea';
import Textarea_2 from './component_3/Textarea_2';
import MulTextarea from './component_3/MulTextarea';
import Input_props from './component_3/Input_props';


function App() {
  return (
    <div className="App">
      <div className="mt-5 mb-5">
        <h1>Here is Props Practice</h1>
        <Button name="Props Button 1" /><br></br>
        <Button name="Props Button 2" /><br></br>
        <Functional_cmpnt name="samia" country="Bangla" />
      </div>

      <div className="mt-5 mb-5">
        <h1>Here is Button Click Practice</h1>
        <Button_event_Handlr /><br></br>
        <Arrow_function /><br></br>
        <Arrow_fnctn_clck_evnt /><br></br>
      </div>

      <div className="mt-5 mb-5">
        <h1>Here is State Practice</h1>
        <State />
        <State_2_practice />
        <State_practice_3 />
      </div>

      <div className="mt-5 mb-5">
        <h1>Here is Set_State Practice</h1>
        <Set_state />
      </div>

      <div className="mt-5 mb-5">
        <h1>Here is Conditional Return Practice</h1>
        <Conditional_return condition={false} />
        <Conditional_return condition={true} />
        <Conditional_return_2 condition={true} />
        <Conditional_return_2 condition={false} />
        <Condition_prac_3 condition={false} />
        <Condition_prac_3 condition={true} />
      </div>



      <div className="mt-5 mb-5">
      <h1>This is Practice Part</h1>
      <Header name="One"/>
      <Buttton name="Read more"/><br></br>

      <h6>Click event is working</h6>
      <Click_event/><br></br>

      <h6>Passing argument with onclick event handler is working</h6>
      <Passing_argu/><br></br>


      <Arrrow_function/><br></br>
      <Sttate/><br></br>
      <SET_STATE/><br></br>
      <Condittion condition={true}/>
      <Condittion condition={false}/>
      </div>

      <div>
        <Form/><br></br>
        <Onchange/><br></br><br></br>
        <Onchange_2/><br></br><br></br>
        <Mul_onchge/><br></br>
       
        <Onsubmit/><br></br>
        <h6>Multiple Input form Onchange Handler</h6>
        <Mul_onchange_2/><br></br><br></br>

        <p>Textarea form Onchange Handler</p>
        <Textarea/>
        <Textarea_2/><br></br><br></br>
        <h6> Multiple Textarea form Onchange Handler</h6>
        <MulTextarea/>
      </div>

      <div className="mt-5 mb-5">
        
        <Input_props name="username" placeholder="Name" /><br></br><br></br>
      </div>

    </div>
  );
}

export default App;
