import React,{Component} from "react"; 

 class SET_STATE extends Component{

constructor(){
    super()
    this.state={
        name:"Set state"
    }
}
Change(a){
this.setState({name:a})
}

     render(){
         return(
             <div>
                 <h5>Set state Practice</h5>
                 <h6>{this.state.name}</h6>
                 <button className="btn btn-primary" onClick={this.Change.bind(this,"State")}>Set state</button>

             </div>
         );
     }
 }
 export default SET_STATE;