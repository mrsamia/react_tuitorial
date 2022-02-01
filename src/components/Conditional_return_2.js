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


function Conditional_return_2(props) {
    const condition = props.condition
    return (
        condition == true ? <Login/> :  <Logout/>
    )



}
export default Conditional_return_2;
