import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <p>First Form</p>
                <input type="text" placeholder='Your Name'/><br></br><br></br>
                <input type='submit' value="Submit Now" />
            </div>
        );
    }
}

export default Form;