
function Button_event_Handlr(){

 {/* onclick event handler
 // button click event */}
    function onclckk(){
        alert("aaaa");
    }

{/*Passing argument with onclick event handler */}
function onclck(a){
    alert(a);
}

    return(

        <div>
            <div>
                {/* onclick event handler
                // button click event */}
            <button className='btn btn-primary' onClick={onclckk}>click event</button>
            </div><br></br>
            <div>
                 {/*Passing argument with onclick event handler */}
            <button className='btn btn-danger'  onClick={onclck.bind(this,"This button is clicked")}>Passing argument</button>
            </div>
            
        </div>
    );
}
export default Button_event_Handlr;