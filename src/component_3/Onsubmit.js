import React, { Component } from 'react';

class Onsubmit extends Component {


    constructor() {
        super()
        this.state = {
            username: " "
        }
    }


    handler = (event) => {
        var Myname = event.target.name;
        var Myvalue = event.target.value;
        this.setState({ [Myname]: Myvalue })
    }

    onsubmithandler=()=>{
        alert(this.state.username);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onsubmithandler}>
                    <p> Form Onsubmit Handler</p>
                    <p>{this.state.username}</p>
                    <input name='username' className='innput' type="text" placeholder='Your Name'
                        onChange={this.handler} /><br></br><br></br>
                    <input type="submit" value="submit" />
                </form>
            </div>
        );
    }
}

export default Onsubmit;