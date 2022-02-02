function Button(props) {

    return (
        <div>
            <button className="btn btn-warning text-white" onClick={props.handle_click} style={props.style}>{props.name}</button>
        </div>
    );
}
export default Button;