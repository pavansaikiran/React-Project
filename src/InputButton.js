import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

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
            <Box style={{margin: '10px', padding: '10px' , width: '25%'}} boxShadow={3}  borderRadius={16} >
        <TextField
        id="standard-number"
        label="Increase By"
        onChange={this.handleinc}
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
       value={this.state.inc}  />
         <Button style={{margin: 10}} variant="contained" color="primary" size="large" onClick={() => this.props.click(this.state.inc)}>+</Button>
            </Box>
        )}
        else{
            return (
                <Box style={{margin: '10px', padding: '10px' , width: '25%'}} boxShadow={3} borderRadius={16} >  
          <TextField
        label="Decrease By"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}  value={this.state.dec} onChange={this.handledec} />
        <Button style={{margin: 10}} variant="contained" color="secondary" size="large" onClick={() => this.props.click(this.state.dec)}>-</Button>
           </Box> 

            )
        }
        
    }
}

export default InputButton
