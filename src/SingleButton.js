import React, { Component } from 'react'

export class SingleButton extends Component {
    constructor(props) {
        super(props)
    
        
    }
    
    render() {
        if(this.props.flag === 'inc'){
            return (
                <button onClick={this.props.click}>++</button>
            )
        }
        else{
            return (
                <button onClick={this.props.click}>--</button>
            )
        }
    }
}

export default SingleButton
