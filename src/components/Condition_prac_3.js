import React from "react";
import Button from "./Button";
import Functional_cmpnt from "./Functional_cmpnt";

function Condition_prac_3(props){
    const condition = props.condition
    if(condition==true){
        return(
            <Button name="Condition Button"/>
        )
    }
    else{
        return(
            <Functional_cmpnt name="RONY" country="USA"/>
        )
    }
}
export default Condition_prac_3;