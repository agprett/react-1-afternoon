import React, { Component } from 'react';

class FilterString extends Component{
  constructor(){
    super()
    this.state = {
      unFilteredArray: ['Lucario', 'Ganon', 'Mario', 'Isabelle', 'Ike', 'Link'],
      userInput: '',
      filteredArray: []
    }
  }

  handleChange(input){
    this.setState({userInput: input})
  }

  getFiltered(str){
    let smalllerArray = this.state.unFilteredArray.filter(e => e.includes(str))
    this.setState({filteredArray: smalllerArray})
  }

  render() {
    return (
      <div className='puzzleBox filterStringPB'>
        <h4>Filter String</h4>
        <span className='puzzleText'>Characters: {JSON.stringify(this.state.unFilteredArray)}</span>
        <input className='inputLine' onChange={event => this.handleChange(event.target.value)}/>
        <button className='confirmationButton' onClick={() => this.getFiltered(this.state.userInput)}>Get Filtered</button>
        <span className='resultsBox filterStringRB'>Selected: {JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }
}

export default FilterString