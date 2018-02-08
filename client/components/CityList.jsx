import React from 'react'

import WeatherDetails from './WeatherDetails'
import cities from '../../public/data.js'

export default class CityList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      detailsVisible: false,
      citiesArray: [],
      city: null
    }
    this.toggleVisibility = this.toggleVisibility.bind(this)
    this.setCity = this.setCity.bind(this)
  }
  toggleVisibility() {
    this.setCity()
    this.setState({detailsVisible: true})
  }

  setCity() {
    this.setState({city: e.target.value})
    // console.log(this.state.city)
    this.setState({ coords: citiesArray.city.coords})
  }


  componentDidMount() {
    this.setState({citiesArray: cities})
  }
 
  render() {
    return (
      <div>
        
        <select className= "dropdown" onChange={this.toggleVisibility}>
          <option>Select a city</option>
          {this.state.citiesArray.map(city => <option>{city.name}</option>)}
        </select>
      
      {this.state.detailsVisible && <WeatherDetails />}
      
      </div>
    )
  }
}