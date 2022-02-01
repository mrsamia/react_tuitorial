import React from 'react';

function Condition_1() {
    return (
        <div>
            <h6>
                Condition 1
            </h6>
        </div>
    );
}


function Condition_2() {
    return (
        <div>
            <h6>
                Condition 2
            </h6>
        </div>
    );
}



function Condittion(props) {

    const condition = props.condition

    if (condition == true) {
        return (                                                
            <Condition_1 />
        )
    }
    else {
        return (
            <Condition_2 />
        )
    }

    /*

    return(
       (condition == true)? <Condition_1 />: <Condition_2 />
    );  
    
    */
    
}

export default Condittion;