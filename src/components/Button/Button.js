import {Component} from 'react'

class Button extends Component{
constructor (props){
    super(props);
    console.log("Button", this);

    this.state ={
        shouldShow:true,
    };
    this.handleClick = this.handleClick.bind(this)
}

handleClick (){
    this.setState((prevState)=>({
        shouldShow: !prevState.shouldShow,
    }));
    //   {
        // [target.textContent]:prevState[target.textContent]+1
    // }
    // console.log("clicked");
    // console.log("handleClick's context", this)
    // console.log("handleClick's context-check state", this.state);
    // console.log("handleClick's context-check props", this.props);
}


render(){
    return (
    <div>
    {this.state.shouldShow && <p>Hello world</p>}
    <button onClick={this.handleClick}
    // onClick={()=>{
    //     console.log(this)
    // }
    // }
    
    >Click me</button>
    </div>
    );
}

}

export {Button};