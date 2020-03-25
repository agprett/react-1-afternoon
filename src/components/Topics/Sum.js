import React, { Component } from 'react';

class Sum extends Component{
  constructor(){
    super()
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }

  handleFirst(event){
    this.setState({number1: event})
  }

  handleSecond(event){
    this.setState({number2: event})
  }
  
  combine(num1, num2){
    let added = parseInt(num1, 10) + parseInt(num2, 10)
    this.setState({sum: added})
  }

  render() {
    return (
      <div className='puzzleBox sumPB'>
        <h4>Sum</h4>
        <input className='inputLine' onChange={event => this.handleFirst(event.target.value)}/>
        <input className='inputLine' onChange={event => this.handleSecond(event.target.value)}/>
        <button className='confirmationButton' onClick={() => this.combine(this.state.number1, this.state.number2)}>Add</button>
    <span className='resultsBox'>Sum: {this.state.sum}</span>
      </div>
    )
  }
}

export default Sum