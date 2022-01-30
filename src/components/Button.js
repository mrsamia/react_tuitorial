function Button(props) {
    return (
        <div>
            <button className="btn btn-warning text-white">{props.name}</button>
        </div>
    );
}
export default Button;