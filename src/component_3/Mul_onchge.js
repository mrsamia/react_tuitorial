import React, { Component } from 'react';

class Mul_onchge extends Component {


    constructor() {
        super()
        this.state = {
            username: " "
        }
    }


    handler=(event)=>{
       var Myname= event.target.name;
       var Myvalue= event.target.value;
       this.setState({[Myname]:Myvalue})
    }


    render() {
        return (
            <div>
                 <p>Multiple input Form Onchange Handler</p>
                <p>{this.state.username}</p>
                <input name='username' className='innput' type="text" placeholder='Your Name' 
                onChange={this.handler} /><br></br><br></br>
                <input type="submit" value="submit" />

            </div>
        );
    }
}

export default Mul_onchge;