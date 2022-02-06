import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Arrow_function from './components/Arrow_function';
import Button_event_Handlr from './components/Button_event_Handlr';
import Functional_cmpnt from './components/Functional_cmpnt';
import Arrow_fnctn_clck_evnt from './components/Arrow_fnctn_clck_evnt';
import Button from './components/Button';

import Conditional_return from './components/Conditional_return';
import Conditional_return_2 from './components/Conditional_return_2';
import Condition_prac_3 from './components/Condition_prac_3';


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
        <h1>Here is Conditional Return Practice</h1>
        <Conditional_return condition={false} />
        <Conditional_return condition={true} />
        <Conditional_return_2 condition={true} />
        <Conditional_return_2 condition={false} />
        <Condition_prac_3 condition={false} />
        <Condition_prac_3 condition={true} />
      </div>

      <div className="mt-5 mb-5">
        <Input_props name="username" placeholder="Name" /><br></br><br></br>
      </div>

    </div>
  );
}

export default App;
