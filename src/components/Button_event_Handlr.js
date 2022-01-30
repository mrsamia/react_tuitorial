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
            <button onClick={onclckk}>Learn More</button>
            </div>
            <div>
                 {/*Passing argument with onclick event handler */}
            <button onClick={onclck.bind(this,"This button is clicked")}>Read More</button>
            </div>
            
        </div>
    );
}
export default Button_event_Handlr;