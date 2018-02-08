import React from 'react'

import WeatherDetails from './WeatherDetails'
import {getCities} from './db.json'

export default class CityList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      detailsVisible: false,
      cities: [],
      city: null
    }
    this.toggleVisibility = this.toggleVisibility.bind(this)
    this.setCity = this.setCity.bind(this)
  }
  toggleVisibility() {
    setCity()
    set.State({detailsVisible: true})
  }

  setCity() {
    set.State({city: e.target.value})
  }
  
  getCities() {
    set.State({ cities: getCities() })
  }

 
  render() {
    return (
      <div>
        
        <select className= "dropdown" onChange={this.toggleVisibility}>
          <option>Select a city</option>
          {this.state.cities.map(city => <option>{cities}</option>)}

        </select>
      
      {this.state.detailsVisible && <WeatherDetails 
      name= />}
      
      </div>
    )
  }
}