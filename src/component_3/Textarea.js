import React, { Component } from 'react';

class Textarea extends Component {

constructor(){
    super();
    this.state={
        userinput:""
    }
}
handler=(event)=>{
var Myvalue=event.target.value;
this.setState({userinput:Myvalue})
}

    render() {
        return (
            <div>
                <textarea className='innput' onChange={this.handler} placeholder='This is a Text area' />
                <p>{this.state.userinput}</p>
            </div>
        );
    }
}

export default Textarea;