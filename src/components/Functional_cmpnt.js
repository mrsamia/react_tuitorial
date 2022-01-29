import React from 'react';

function Functional_cmpnt(props) {

function Dothis(a){
    alert(a);
}



    return (
        <div>
            <h1>Hello I'm {props.name} and i'm from {props.country}</h1>

            <button onClick={Dothis.bind(this,"Button is clicked")}>Click me</button>
        </div>
    );
}
export default Functional_cmpnt;