import react, { Component } from 'react';

class State extends Component {

    constructor() {
        super()
        this.state = {
            name: "mim",    /* name: single value */
            age: "24",
            status: ["married", "unmarried"],  /* status: array value*/
            weight: {
                class6: "45",
                class7: "46",          /* nested react state */
                class8: "47",
                class9: ["48", "73", "70", "87"]
            }
        }
    }


    render() {
        return (
            <div>

                <h2>name: {this.state.name}</h2>                {/* name: single value */}
                <h2>status: {this.state.status[1]}</h2>          {/* status:  array value */}
                <h2>weight: {this.state.weight.class8}</h2>      {/*  nested react state*/}
                <h2>weight: {this.state.weight.class9[2]}</h2>  {/* class9: nested array value */}
            </div>
        )
    }
}
export default State;