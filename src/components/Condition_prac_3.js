import React from "react";
import Button from "./Button";
import Functional_cmpnt from "./Functional_cmpnt";

function Condition_prac_3(props){


    function click(){
        alert("Button is clicked");
    }


    const condition = props.condition

    if(condition==true){
        return(
            <Button name="Condition Button" handle_click={click} 
            style={{ backgroundColor: 'red', color: 'white' , fontSize: 20, height:60, width:250}}/>
        )
    }
    else{
        return(
            <Functional_cmpnt name="RONY" country="USA"/>
        )
    }
}
export default Condition_prac_3;