import React, { Component } from 'react';

class FilterObject extends Component{
  constructor(){
    super()
    this.state = {
      unFilteredArray: [
        {
          mode: 'Walk',
          distance: 10,
          enjoyment: false,
          preferred: 'No'
        },
        {
          mode: 'Bike',
          speed: 13,
          distance: 30,
          preferred: 'No'
        },
        {
          mode: 'Car',
          speed: 35,
          distance: 350,
          enjoyment: true,
        },
        {
          mode: 'Motorcycle',
          speed: 30,
          enjoyment: true,
          preferred: 'Yes'
        }
      ],
      userInput: '',
      filteredArray: []
    }
  }

  handleChange(input){
    this.setState({userInput: input})
  }

  getFiltered(words){
    let transports = this.state.unFilteredArray
    let smallerArray = []
    for(let i = 0; i < transports.length; i++){
      if(transports[i].hasOwnProperty(words)){
        smallerArray.push(transports[i])
      }
    }
    this.setState({filteredArray: smallerArray})
  }

  render() {
    return (
      <div className='puzzleBox filterObjectPB'>
        <h4>Filter Object</h4>
        <span className='puzzleText' >Original: {JSON.stringify(this.state.unFilteredArray, null, 5)}</span>
        <input className='inputLine' onChange={event => this.handleChange(event.target.value)}/>
        <button className='confirmationButton' onClick={ () => this.getFiltered(this.state.userInput)}>Filter</button>
        <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray, null, 5)}</span>
      </div>
    )
  }
}

export default FilterObject