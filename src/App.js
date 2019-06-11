import React from 'react';
import './App.css';
import { Component } from 'react'
import { SingleButton } from './SingleButton';
import { InputButton } from './InputButton';
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

export class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
       count: 0
    }
    this.singleinc = this.singleinc.bind(this);
    this.singledec = this.singledec.bind(this);
    this.inputdec = this.inputdec.bind(this);
    this.inputinc = this.inputinc.bind(this);
  }
  singleinc(){
    const x = this.state.count+1;
    this.setState({count: x});
  }
  singledec(){
    const x = this.state.count-1;
    this.setState({count: x});
  }
  inputinc(c){
    if(isNaN(c)|| c === '')
    alert("please a valid input");
    else{
  const x = this.state.count + parseInt(c);
  //console.log(c);
    this.setState({count : x});
    }
  }
  inputdec(c){
    if(isNaN(c) || c === '')
    alert("please a valid input");
    else{
  const x = this.state.count - parseInt(c);
  //console.log(c);
    this.setState({count : x});
    }
  }
  render() {
    
    return (
      <div align="center">
       <h1>{this.state.count}</h1>
        <SingleButton click={this.singleinc} flag='inc' />
        <SingleButton click={this.singledec} flag='dec' />
        <InputButton click={this.inputinc} flag='inc' />
        <InputButton click={this.inputdec} flag='dec' />
        <Button variant="outlined" color="primary" onClick={() => this.setState({count: 0})} >Reset </Button>
      </div>
    )
    }
  } 
export default App;