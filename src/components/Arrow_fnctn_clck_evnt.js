{/* onclick event handler
 // button click event */}
const Arrow_fnctn_clck_evnt = () => {
    alert("Arrow Function Click event");
}

{/*Passing argument with onclick event handler */}
const Arrow_fnctn_pass_argument = (a) => {
    alert(a);
}



const Arrow_function = () => {
    return (
        <div>
            {/* onclick event handler
            // button click event */}
            <button className="btn btn-primary" onClick={Arrow_fnctn_clck_evnt}>Arrow Function Click event</button>
            <br></br><br></br>

            {/*Passing argument with onclick event handler */}
            <div>
                <button className="btn btn-danger" onClick={Arrow_fnctn_pass_argument.bind(this, "Passing argument with onclick event handler")}>Arrow Function Passing Arguments</button>
            </div>

        </div>

    );
}
export default Arrow_function;