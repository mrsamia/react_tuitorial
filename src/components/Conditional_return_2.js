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


function Conditional_return_2(props) {
    const condition = props.condition
    return (
        condition == true ? <Login/> :  <Logout/>
    )



}
export default Conditional_return_2;
