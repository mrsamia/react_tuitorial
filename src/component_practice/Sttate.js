import React, {Component} from "react";

class Sttate extends Component{

constructor(){
    super()
    this.state={
        title:"these are from State",
        name:"Samia",
        country:"Bangladesh",
        weight:{
            class6:"56",
            class7:"57",
            class8:"58",
            class9:"59",
        },
        status:["Unmarried","Married"]
    }
}


    render(){
        return(
            <div>
                 <h6>{this.state.title}</h6>
                <h6>{this.state.name}</h6>
                <h6>{this.state.country}</h6>
                <h6>{this.state.weight.class9}</h6>
                <h6>{this.state.status[0]}</h6>
                

            </div>
        );
    }
}
export default Sttate;