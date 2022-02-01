import React, { Component } from "react";

class State_practice_3 extends Component {


    constructor() {
        super()
        this.state = {
            name: {
                collage: "Asad",
                school: ["Lalgirls", "greengirls"],
                versity: {
                    one: "IUBAT",
                    two: "AIUB",
                    three: "DU"
                }
            },
            age: "56",
            item: {
                one: {
                    title: "Samia",
                    subtitle: "Samia Rahman",
                    text: "Create custom landing pages"
                },
                two: {
                    title: "Moshfiq",
                    subtitle: "Moshfiq Rahman",
                    text: "Create custom landing pages"
                },
                three: {
                    title: "Rony",
                    subtitle: "Rony Rahman",
                    text: "Create custom landing pages"
                }
            }
        }
    }

    render() {
        return (
            <div>
                <h6>{this.state.age}</h6>
                <h6>{this.state.name.school[1]}</h6>
                <h6>{this.state.name.versity.three}</h6>
                <h6>{this.state.item.one.subtitle}</h6>
            </div>
        );
    }
}
export default State_practice_3;