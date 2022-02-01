import React from 'react';
import Buttton from './Buttton';

function Click_event() {

    function click(){
        alert("Button is clicked");
    }

    return (
        <div>
             <Buttton onClick={click} name="Click Event"/>  {/*Click event is not working*/}
        </div>                                              /*import button, then set onClick*/
    );
}

export default Click_event;