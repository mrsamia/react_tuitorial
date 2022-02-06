import React from 'react';

function Login() {
    return (
        <div>
            <h6>Show Login</h6>
        </div>
    );
}

function Logout() {
    return (
        <div>
            <h6>Show logout</h6>
        </div>
    );
}


function Conditional_return(props) {
    const condition = props.condition
    if (condition === true) {
        return (
            <Login />
        )
    }
    else {
        return (
            <Logout />
        )
    }
}
export default Conditional_return;
