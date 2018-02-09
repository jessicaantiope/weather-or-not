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

  toggleVisibility(e) {
    this.setCity(e)
    this.setState({detailsVisible: true})
  }

  setCity(e) {
    this.setState({city: e.target.value})
  }

  componentDidMount() {
    this.setState({citiesArray: cities})
  }

  render() {
    return (
      <div className="select is-rounded is-warning is-medium">

        <select onChange={this.toggleVisibility}>
          <option>Select your city</option>
          {this.state.citiesArray.map(city => <option>{city.name}</option>)}
        </select>

      {this.state.detailsVisible && <WeatherDetails />}

      </div>
    )
  }
}
