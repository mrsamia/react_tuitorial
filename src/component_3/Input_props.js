import React, { Component } from 'react';

class Input_props extends Component {


    constructor(){
        super()
        this.state={
            firstname:" ",
            lastname:" ",
            address:" ",
            email:" "
        }
    }


onchangehandler=(event )=>{
    var Myname=event.target.name;
   var Myvalue= event.target.value;
   this.setState({[Myname]:Myvalue})
}



    render(props) {
        return (
            <div>
                <form>
                    <input name={this.props.name} placeholder={this.props.placeholder} onChange={this.props.changehandler}/>
                </form>
            </div>
        );
    }
}

export default Input_props;