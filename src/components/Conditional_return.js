import React from 'react';

function Login() {
    return (
        <div>
            <h3>Show Login</h3>
        </div>
    );
}

function Logout() {
    return (
        <div>
            <h3>Show logout</h3>
        </div>
    );
}


function Conditional_return(props) {
    const condition = props.condition
    if (condition == true) {
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
