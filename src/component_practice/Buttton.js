import React from 'react';

function Buttton(props) {

    return (
        <div>
            <button className="btn btn-danger" onClick={props.handle_click}>{props.name}
            </button>
        </div>
    );
}

export default Buttton;