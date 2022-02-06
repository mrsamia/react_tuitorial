import react, { Component } from 'react';

class MulTextarea extends Component {

    constructor() {
        super();
        this.state = {
            userinput: "",
            userinput_2: "",
            userinput_3: ""
        }
    }

    onchangehandler = (event) => {
        var input = event.target.name;
        var mytext = event.target.value;
        this.setState({ [input]: mytext })
    }


    render() {
        return (
            <div>
                <div>
                    <p>{this.state.userinput}</p>
                    <textarea className='innput' name='userinput' placeholder='This is a Text area' onChange={this.onchangehandler} /><br></br>
                </div>

                <div>
                    <p>{this.state.userinput_2}</p>
                    <textarea className='innput' name='userinput_2' placeholder='This is a Text area' onChange={this.onchangehandler} /><br></br>
                </div>
                
                <div>
                    <p>{this.state.userinput_3}</p>
                    <textarea className='innput' name='userinput_3' placeholder='This is a Text area' onChange={this.onchangehandler} /><br></br>
                </div>
            </div>
        );
    }
}
export default MulTextarea;