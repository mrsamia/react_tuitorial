import React, { Component } from "react";

class Set_state extends Component {

    constructor() {
        super()
        this.state = {
            name: "Rony"
        }
    }

    fnct(a) {
        this.setState({ name: a })
    }

    render() {
        return (
            <div>
                <h6>{this.state.name}</h6>
                <button className="btn btn-danger mt-5" onClick={this.fnct.bind(this, "MIM")}>Set State </button>
                <button className="btn btn-danger" onClick={this.fnct.bind(this, "Rony")}>Set State </button>
            </div>
        );
    }
}
export default Set_state;