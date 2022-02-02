import React, { Component } from 'react';
import '../Style/input.css';

class Onchange_2 extends Component {

    constructor() {
        super()
        this.state = {
            name: " "
        }
    }


    handler = (event) => {
        var Newame = event.target.value;
        this.setState({ name: Newame })
    }

    render() {
        return (
            <div>
                <p>First Form Onchange Handler</p>
                <p>{this.state.name}</p>
                <input className='innput' type="text" placeholder='Your Name' onChange={this.handler} /><br></br><br></br>
                <input type="submit" value="submit" />
            </div>
        );
    }
}

export default Onchange_2;