import React, { Component } from 'react'
import './Assets/CSS/Calculator.css'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { onKeyPress, calculate, allClear, clear } from './Assets/Actions/Actions'

class Calculator extends Component {
    state = {

    }

    // onKeyPress = (value) => {
    //     const lastcharacter = this.state.this.props.display.charAt(this.state.this.props.display.length - 1);
    //     console.log(value, this.state.this.props.display)
    //     if (this.state.this.props.display == '' && value == 0) {
    //         console.log("Zero", value, this.state.this.props.display)
    //         return;
    //     }
    //     else if (this.state.this.props.display == '' && (value == '+' || value == '-' || value == '*' || value == '/' || value == '%')) {
    //         return;
    //     }

    //     else if ((lastcharacter == '+' || lastcharacter == '-' || lastcharacter == '*' || lastcharacter == '/' || lastcharacter == '%') && (value == '+' || value == '-' || value == '*' || value == '/' || value == '%')) {
    //         console.log("lastcharacter o+o", value, this.state.this.props.display)
    //         return
    //     }

    //     else if ((lastcharacter == '+' || lastcharacter == '-' || lastcharacter == '*' || lastcharacter == '/' || lastcharacter == '%') && (value == '0')) {
    //         console.log("lastcharacter o+0", value, this.state.this.props.display)
    //         return
    //     }

    //     else if (this.state.this.props.display.charAt(0) != '0' && this.state.this.props.display.length < 22)
    //         this.setState({ this.props.display: this.state.this.props.display + value })
    // }

    // calculate = () => {
    //     console.log("Calculate")
    //     this.setState({
    //         this.props.display: eval(this.state.this.props.display).toString()
    //     })
    // }

    // allClear = () => {
    //     this.setState({
    //         this.props.display: ''
    //     })
    // }

    // clear = () => {
    //     console.log("this.props.display: ", this.state.this.props.display.length)
    //     this.setState({
    //         this.props.display: this.state.this.props.display.substring(0, this.state.this.props.display.length - 1)
    //     })
    // }
    render() {
        // const { this.props.display } = this.state
        return (
            <div className="container text-center" id="calc">
                <div className="calcBG text-center">
                    <div className="row">
                        <small>Calculator</small>
                    </div>
                    <div className="row" id="result">
                        <div className="screen">  
                            {this.props.display == ''
                                ? '0'
                                : this.props.display}
                        </div>
                    </div>
                    <div className="row">
                        <button id="allClear" className="btn btn-danger" onClick={this.props.allClear}>AC</button>
                        <button id="clear" className="btn btn-warning" onClick={this.props.clear}>CE</button>
                        <button id="%" className="btn btn-info" onClick={() => this.props.onKeyPress('%')}>%</button>
                        <button id="/" className="btn btn-info" onClick={() => this.props.onKeyPress('/')}>÷</button>
                    </div>
                    <div className="row">
                        <button id={7} className="btn btn-info" onClick={() => this.props.onKeyPress(7)}>7</button>
                        <button id={8} className="btn btn-info" onClick={() => this.props.onKeyPress(8)}>8</button>
                        <button id={9} className="btn btn-info" onClick={() => this.props.onKeyPress(9)}>9</button>
                        <button id="*" className="btn btn-info" onClick={() => this.props.onKeyPress('*')}>x</button>
                    </div>
                    <div className="row">
                        <button id={4} className="btn btn-info" onClick={() => this.props.onKeyPress(4)}>4</button>
                        <button id={5} className="btn btn-info" onClick={() => this.props.onKeyPress(5)}>5</button>
                        <button id={6} className="btn btn-info" onClick={() => this.props.onKeyPress(6)}>6</button>
                        <button id="-" className="btn btn-info" onClick={() => this.props.onKeyPress('-')}>-</button>
                    </div>
                    <div className="row">
                        <button id={1} className="btn btn-info" onClick={() => this.props.onKeyPress(1)}>1</button>
                        <button id={2} className="btn btn-info" onClick={() => this.props.onKeyPress(2)}>2</button>
                        <button id={3} className="btn btn-info" onClick={() => this.props.onKeyPress(3)}>3</button>
                        <button id="+" className="btn btn-info" onClick={() => this.props.onKeyPress('+')}>+</button>
                    </div>
                    <div className="row">
                        <button id={0} className="btn btn-info" onClick={() => this.props.onKeyPress(0)}>0</button>
                        <button id="." className="btn btn-info" onClick={() => this.props.onKeyPress('.')}>.</button>
                        <button id="equals" className="btn btn-success" onClick={this.props.calculate}>=</button>
                        <button id="blank" className="btn btn-info">&nbsp;</button>
                    </div>
                </div>
            </div>

        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            onKeyPress, calculate, allClear, clear
        },
        dispatch
    )
}

const mapStateToProps = (store) => ({
    display: store.display
})

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)
