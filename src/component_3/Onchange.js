import React, { Component } from 'react';



class Onchange extends Component {


constructor(){
    super()
    this.state={
        name:" "
    }
}


    onchangehandler=(event)=>{
        var Newname= event.target.value;
        this.setState({name:Newname})

    }

    render() {
        return (
            <div>
                 <p>First Form Onchange Handler</p>
                 <p>{this.state.name}</p>
                <input type="text" placeholder='Your Name' onChange={this.onchangehandler}/><br></br><br></br>
                <input type='submit' value="Submit Now" /> 
            </div>
        );
    }
}

export default Onchange;