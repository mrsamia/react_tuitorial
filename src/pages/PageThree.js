import React, { Component } from 'react';

import Form from '../components/Form';
import Onchange from '../component_3/Onchange';
import Onchange_2 from '../component_3/Onchange_2';
import Mul_onchge from '../component_3/Mul_onchge';
import Onsubmit from '../component_3/Onsubmit';
import Mul_onchange_2 from '../component_3/Mul_onchange_2';
import Textarea from '../component_3/Textarea';
import Textarea_2 from '../component_3/Textarea_2';
import MulTextarea from '../component_3/MulTextarea';




class PageThree extends Component {
    render() {
        return (
            <div className="App">
                <h1>PageThree</h1>

                <div>
                    <Form /><br></br>
                    <Onchange /><br></br><br></br>
                    <Onchange_2 /><br></br><br></br>
                    <Mul_onchge /><br></br>

                    <Onsubmit /><br></br>
                    <h6>Multiple Input form Onchange Handler</h6>
                    <Mul_onchange_2 /><br></br><br></br>

                    <p>Textarea form Onchange Handler</p>
                    <Textarea />
                    <Textarea_2 /><br></br><br></br>
                    <h6> Multiple Textarea form Onchange Handler</h6>
                    <MulTextarea />
                </div>

            </div>
        );
    }
}

export default PageThree;