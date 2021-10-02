import React from 'react';
import PropTypes from 'prop-types';
import {Controls} from './Contols'
import {Value} from './Value'

class Counter extends React.Component{
    // constructor(){
    //     super();
    //     this.state={
    //         value:0,
    //           }
    // }

    static defaultProps ={
        initialValue: 0,
    };
    static propTypes ={
        //
    }


    state={
        value: this.props.initialValue,
    }

    handleIncrement=(event)=>{
        // console.log('Кликнули увеличить');
        // console.log(event.target );
        //  this.setState((prevState)=>{
        //     return {
        //       value: prevState.value+1,   
        //     }
        //      });
        this.setState(prevState =>({
            value: prevState.value+1,
        }));
    };
    handleDecrement=()=>{
        // console.log('Кликнули уменьшить');
        this.setState(prevState =>({
            value: prevState.value-1,
        }));
    }

    render() {
        const {value}=this.state;
        return(
    <div className="Counter">
        <Value onValue={value}/>
        <Controls
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}/>
        </div>
        );
    }
}





export {Counter}; 