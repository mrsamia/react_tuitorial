import React from 'react';
import Buttton from './Buttton';

function Passing_argu() {

function pass(a){
    alert(a);
}

    return (
        <div>
            <Buttton name="passing Argument" handle_click={pass.bind(this,"This is Passing Argument")}/>
        </div>
    );
}

export default Passing_argu;