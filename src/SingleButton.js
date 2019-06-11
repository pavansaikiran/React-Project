import React, { Component } from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'



export class SingleButton extends Component {
    constructor(props) {
        super(props)
    
        
    }
    
    render() {
        if(this.props.flag === 'inc'){
            return (
                <Button variant="contained" color="primary"  onClick={this.props.click}>++</Button>
                
            )
        }
        else{
            return (
                
                <Button variant="contained" color="secondary" onClick={this.props.click}>--</Button>
            )
        }
    }
}

export default SingleButton
