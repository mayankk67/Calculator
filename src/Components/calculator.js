import React from 'react';
import {connect} from 'react-redux';

class Calculator extends React.Component{
    render(){
        return(
        <div className="text-center">
            <div>
                <div>
                    <h1>{this.props.expression}</h1>
                </div>
                <div>
                    <button name='1' value='1' onClick={()=>this.props.addition('1')}>1</button>
                    <button name='2' value='2' onClick={()=>this.props.addition('2')}>2</button>
                    <button name='3' value='3' onClick={()=>this.props.addition('3')}>3</button>
                </div>
                <div>
                    <button name='4' value='4' onClick={()=>this.props.addition('4')}>4</button>
                    <button name='5' value='5' onClick={()=>this.props.addition('5')}>5</button>
                    <button name='6' value='6' onClick={()=>this.props.addition('6')}>6</button>
                </div>
                <div>
                    <button name='7' value='7' onClick={()=>this.props.addition('7')}>7</button>
                    <button name='8' value='8' onClick={()=>this.props.addition('8')}>8</button>
                    <button name='9' value='9' onClick={()=>this.props.addition('9')}>9</button>
                </div>
                <div>
                    <button name='+' value='+' onClick={()=>this.props.addition('+')}>+</button>
                    <button name='0' value='0' onClick={()=>this.props.addition('0')}>0</button>
                    <button name='-' value='-' onClick={()=>this.props.addition('-')}>-</button>
                </div>
                <div>
                    <button name='/' value='/' onClick={()=>this.props.addition('/')}>/</button>
                    <button name='evalu' value='evalu' onClick={()=>this.props.evaluation('=')}>=</button>
                    <button name='*' value='*' onClick={()=>this.props.addition('*')}>*</button>
                </div>
                <div>
                    <button name='cler' value='cler' onClick={()=>this.props.clear()}>clear</button>
                    <button name='bs' value='bs' onClick={()=>this.props.backspace()}>del</button>
                </div>
            </div>
        </div>
        )
    }
}

const matchStatestoProps = state =>{
    return {expression:state.expression}
}

const matchDispatchtoProps = dispatch =>{
    return {
        addition: (data)=> dispatch({type:'ADD',payload:data}),
        evaluation: ()=>dispatch({type:'EVAL'}),
        clear: ()=>dispatch({type:'CLEAR'}),
        backspace: ()=>dispatch({type:'BACKSPACE'})
    }
}

export default connect(matchStatestoProps,matchDispatchtoProps)(Calculator);