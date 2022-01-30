import React, { Component } from "react";

class State_2_practice extends Component {

constructor(){
    super()
    this.state={
    
        name:{title:{
            one:"SAMIA",
            two:"RONY",
            three:"RAHMAN",
        } },

        data:{
            title:{
                one:"Multiple Layouts",
                two:"Multiple Layouts",
                three:"Multiple Layouts",
            },
            subtitle:{
                one:"With lots of unique blocks, you can easily build a page without coding.",
                two:"Create custom landing pages with Omega ",
                three:"Multiple Layouts build a page ", 
            },
            maintext:{
                one:"Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without coding.",
                two:"Create custom landing pages with Omega that converts more visitors than any website.",
                three:"With lots of unique blocks, you can easily build a page without coding. ", 
            }
        }

}}





    render() {
        return (
            <div>
                
            <h2>{this.state.name.title.one}</h2>
            <h2>{this.state.data.title.one}</h2>
            <h4>{this.state.data.subtitle.one}</h4>
            <p>{this.state.data.maintext.one}</p>
            </div>
        )
    }
}


export default State_2_practice;