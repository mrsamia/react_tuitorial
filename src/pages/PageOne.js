import State from '../components/State';
import State_2_practice from '../components/State_2_practice';
import State_practice_3 from '../components/State_practice_3';
import Set_state from '../components/Set_state';


import React, { Component } from 'react';

class PageOne extends Component {
    render() {
        return (
            <div className="App">
                <h1>pageone</h1>
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
            </div>
        );
    }
}

export default PageOne;