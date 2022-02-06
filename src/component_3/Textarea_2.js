import react,{Component}from 'react';

class Textarea_2 extends Component{

    constructor(){
        super();
        this.state={
            userinput:""
        }
    }

    onchangehandler=(event)=>{
        var mytext= event.target.value;
        this.setState({userinput:mytext})
    }


    render(){
        return(
            <div>
                <p>{this.state.userinput}</p>
                <textarea className='innput' placeholder='This is a Text area' onChange={this.onchangehandler}/>
            </div>
        );
    }
}
export default Textarea_2;