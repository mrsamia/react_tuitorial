import React, { Component } from 'react';

class Mul_onchange_2 extends Component {

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


    render() {
        return (
            <div>
                <p>First Name: {this.state.firstname}</p>
                <p>Last Name: {this.state.lastname}</p>
                <p>Address: {this.state.address}</p>
                <p>Email: {this.state.email}</p>

                <form>
                    <div>
                        <input className='innput' name='firstname' type="text" placeholder='Your Frist Name' onChange={this.onchangehandler} /><br></br><br></br>
                    </div>
                    <div>
                        <input className='innput' name='lastname' type="text" placeholder='Your Last Name' onChange={this.onchangehandler}/><br></br><br></br>
                    </div>
                    <div>
                        <input className='innput' name='address' type="text" placeholder='Your Address' onChange={this.onchangehandler} /><br></br><br></br>
                    </div>
                    <div>
                        <input className='innput' name='email' type="text" placeholder='Your Email' onChange={this.onchangehandler}/><br></br><br></br>
                    </div>
                    <div>
                        <input className='innput' name='submit' type="submit" value="Submit Now" /><br></br><br></br>
                    </div>
                </form>
            </div>
        );
    }
}

export default Mul_onchange_2;