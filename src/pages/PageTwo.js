import React, { Component } from 'react';


import Header from '../component_practice/Header';
import Buttton from '../component_practice/Buttton';
import Click_event from '../component_practice/Click_event';
import Passing_argu from '../component_practice/Passing_argu';
import Arrrow_function from '../component_practice/Arrrow_function';
import Sttate from '../component_practice/Sttate';
import SET_STATE from '../component_practice/SET_STATE';
import Condittion from '../component_practice/Condittion';



class PageTwo extends Component {
    render() {
        return (
            <div className="App">
                <h1>PageTwo</h1>
                <div className="mt-5 mb-5">
                    <h1>This is Practice Part</h1>
                    <Header name="One" />
                    <Buttton name="Read more" /><br></br>

                    <h6>Click event is working</h6>
                    <Click_event /><br></br>

                    <h6>Passing argument with onclick event handler is working</h6>
                    <Passing_argu /><br></br>


                    <Arrrow_function /><br></br>
                    <Sttate /><br></br>
                    <SET_STATE /><br></br>
                    <Condittion condition={true} />
                    <Condittion condition={false} />
                </div>
            </div>
        );
    }
}

export default PageTwo;