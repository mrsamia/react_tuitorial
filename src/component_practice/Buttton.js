import React from 'react';

function Buttton(props) {

    return (
        <div>
            <button className="btn btn-danger" >{props.name}</button>
        </div>
    );
}

export default Buttton;