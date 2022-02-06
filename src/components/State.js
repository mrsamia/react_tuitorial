import { Component } from 'react';

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

                <h6>name: {this.state.name}</h6>                {/* name: single value */}
                <h6>status: {this.state.status[1]}</h6>          {/* status:  array value */}
                <h6>weight: {this.state.weight.class8}</h6>      {/*  nested react state*/}
                <h6>weight: {this.state.weight.class9[2]}</h6>  {/* class9: nested array value */}
            </div>
        )
    }
}
export default State;