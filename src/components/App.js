import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  fetchPet = () => {
    let fetchURL = "/api/pets"
    if (this.state.filters.type !== "all"){
      fetchURL = fetchURL + `?type=${this.state.filters.type}`
    }
    // debugger
    fetch(fetchURL)
      .then(res => res.json())
      .then(petResults => this.setState({
        pets: petResults
    }))
  }

  onAdoptPet = (petId) => {
    let petResult = this.state.pets.map(pet => {
      if(pet.id === petId) {
        return {
          ...pet,
          isAdopted: true
        }
      }
    })
    this.setState({
      pets: petResult
    }
    )
  }

  onChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.fetchPet}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
