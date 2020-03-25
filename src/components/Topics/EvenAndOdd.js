import React, { Component } from 'react';

class EvenAndOdd extends Component{
  constructor() {
    super()
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
  }

  handleChange(event){
    this.setState({userInput: event})
  }

  assignEvenAndOdds(userInput) {
    let input = userInput.split(',')
    let evens = []
    let odds = []
    for(let i =0; i < input.length; i++){
      if(input[i] % 2 === 0){
        evens.push(parseInt(input[i], 10))
      } else {
        odds.push(parseInt(input[i], 10))
      }
      this.setState({
        evenArray: evens
      })
      this.setState({
        oddArray: odds
      })
    }
  } 

  render() {
    return (
      <div className='puzzleBox evenAndOddPB'>
        <h4>Evens and Odds</h4>
        <input className='inputLine' onChange={event => this.handleChange(event.target.value)}/>
        <button className='confirmationButton' onClick={ () => {this.assignEvenAndOdds(this.state.userInput)}}>Split</button>
        <span className='resultsBox'>Evens: {JSON.stringify(this.state.evenArray)}</span>
        <span className='resultsBox'>Odds: {JSON.stringify(this.state.oddArray)}</span>
      </div>
    )
  }
}

export default EvenAndOdd