import React, { Component } from 'react'

export class InputButton extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             inc: '',
             dec: ''
        }
        this.handledec = this.handledec.bind(this);
        this.handleinc = this.handleinc.bind(this);
    }
    handledec(e) {
        this.setState({dec: e.target.value});
    }
    handleinc(e) {
        this.setState({inc: e.target.value});
    }
    render() {
        if(this.props.flag === 'inc'){
        return (
            <div>
                <input value={this.state.inc} onChange={this.handleinc} />
                <button onClick={() => this.props.click(this.state.inc)}>+</button>
            </div>
        )}
        else{
            return (
                <div>
                <input value={this.state.dec} onChange={this.handledec} />
                <button onClick={() => this.props.click(this.state.dec)}>-</button>
            </div>
            )
        }
        
    }
}

export default InputButton
