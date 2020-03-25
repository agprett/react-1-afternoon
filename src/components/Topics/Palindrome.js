import React, { Component } from 'react';

class Palindrome extends Component{
  constructor(){
    super()
    this.state = {
      userInput: '',
      palindrome: ''
    }
  }

  handleChange(event){
    this.setState({userInput: event})
  }

  checkPal(words){
    let checker = words.split('')
    let reversedArr = []

    for(let i = checker.length - 1; i >= 0; i--){
      reversedArr.push(checker[i])
    }

    let reversed = reversedArr.join('')

    words === reversed ? this.setState({palindrome: 'true'}) : this.setState({palindrome: 'false'})
  }

  render() {
    return (
      <div className='puzzleBox filterStringPB'>
        <h4>Palindrome</h4>
        <input className='inputLine' onChange={event => this.handleChange(event.target.value)}/>
        <button className='confirmationButton' onClick={() => this.checkPal(this.state.userInput)}>Check</button>
        <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>
       </div>
    )
  }
}

export default Palindrome