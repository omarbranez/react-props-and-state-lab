import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    // debugger
    let petCards = this.props.pets.map(pet => (
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
      )) //pet and onAdoptPet are passed as props from app. key comes from mapping
      return <div className="ui cards">{petCards}</div>
    }
}

export default PetBrowser
