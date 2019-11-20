import React from 'react';
import { connect } from 'react-redux';
import './calculator.css';

class Calculator extends React.Component {
    render() {
        return (
            <div className="">
                <div>
                    <div className='heading text-left'>
                        <h1>{this.props.expression}</h1>
                    </div>
                    <div>
                        <div className="float-left col-md-5 text-center">
                            <div className="btn-group">
                                <button className='btn ButAns btn-secondary rounded-circle btn-lg col-md-4' name='1' value='1' onClick={() => this.props.addition('1')}>1</button>
                                <button className='btn ButAns btn-secondary rounded-circle btn-lg col-md-4' name='2' value='2' onClick={() => this.props.addition('2')}>2</button>
                                <button className='btn ButAns btn-secondary rounded-circle btn-lg col-md-4' name='3' value='3' onClick={() => this.props.addition('3')}>3</button>
                            </div><br /><br />
                            <div className="btn-group">
                                <button className='btn ButAns btn-secondary rounded-circle btn-lg col-md-4' name='4' value='4' onClick={() => this.props.addition('4')}>4</button>
                                <button className='btn ButAns btn-secondary rounded-circle btn-lg col-md-4' name='5' value='5' onClick={() => this.props.addition('5')}>5</button>
                                <button className='btn ButAns btn-secondary rounded-circle btn-lg col-md-4' name='6' value='6' onClick={() => this.props.addition('6')}>6</button>
                            </div><br /><br />
                            <div className="btn-group">
                                <button className='btn ButAns btn-secondary rounded-circle btn-lg col-md-4' name='7' value='7' onClick={() => this.props.addition('7')}>7</button>
                                <button className='btn ButAns btn-secondary rounded-circle btn-lg col-md-4' name='8' value='8' onClick={() => this.props.addition('8')}>8</button>
                                <button className='btn ButAns btn-secondary rounded-circle btn-lg col-md-4' name='9' value='9' onClick={() => this.props.addition('9')}>9</button>
                            </div><br /><br />
                            <div className="btn-group">
                                <button className='btn ButAns btn-secondary rounded-circle btn-lg col-md-4' name='+' value='+' onClick={() => this.props.addition('+')}>+</button>
                                <button className='btn ButAns btn-secondary rounded-circle btn-lg col-md-4' name='0' value='0' onClick={() => this.props.addition('0')}>0</button>
                                <button className='btn ButAns btn-secondary rounded-circle btn-lg col-md-4' name='-' value='-' onClick={() => this.props.addition('-')}>-</button>
                            </div><br /><br />
                            <div className="btn-group">
                                <button className='btn ButAns btn-secondary rounded-circle btn-lg col-md-4' name='/' value='/' onClick={() => this.props.addition('/')}>/</button>
                                <button className='btn ButAns btn-secondary rounded-circle btn-lg col-md-4' name='evalu' value='evalu' onClick={() => this.props.evaluation('=')}>=</button>
                                <button className='btn ButAns btn-secondary rounded-circle btn-lg col-md-4' name='*' value='*' onClick={() => this.props.addition('*')}>*</button>
                            </div><br /><br />
                        </div>
                        <div className="float-left col-md-5">
                            <button className='btn btn-danger btn-lg col-md-2' name='cler' value='cler' onClick={() => this.props.clear()}>clear</button>
                            <br /><br />
                            <button className='btn btn-success btn-lg col-md-2' name='bs' value='bs' onClick={() => this.props.backspace()}>del</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const matchStatestoProps = state => {
    return { expression: state.expression }
}

const matchDispatchtoProps = dispatch => {
    return {
        addition: (data) => dispatch({ type: 'ADD', payload: data }),
        evaluation: () => dispatch({ type: 'EVAL' }),
        clear: () => dispatch({ type: 'CLEAR' }),
        backspace: () => dispatch({ type: 'BACKSPACE' })
    }
}

export default connect(matchStatestoProps, matchDispatchtoProps)(Calculator);