import React from 'react';
import Buttton from './Buttton';

function Click_event(props) {

    function click(){
        alert("Button is clicked");
    }


    return (
        <div>
             <Buttton handle_click={click} name="Click Event"/>  {/*Click event is not working*/}
        </div>                                              /*import button, then set onClick*/
    );
}

export default Click_event;