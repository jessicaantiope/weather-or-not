import React from 'react'

import WeatherDetails from './WeatherDetails'
import cities from '../../public/data.js'

export default class CityList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      detailsVisible: false,
      cityList: [],
      city: '',
      coords: ''
    }

    this.toggleVisibility = this.toggleVisibility.bind(this)
    this.setCity = this.setCity.bind(this)
  }

  toggleVisibility() {
    this.setCity()
    this.setState({detailsVisible: true})
  }

  setCity() {
    //this.setState({city: eventitit.target.value})
    // console.log(this.state.city)
    
    this.setState({ coords: cities[this.state.city].coords})
    console.log({citiesArray})
  }

  getCityList () {
    console.log('cities: ', cities)
    return cities.map(city => <option key={city.name} >{city.name}</option>)
  }

  componentDidMount() {
    document.getElementById('selectCity').onchange = this.setCity
    this.setState(this.getCityList())
  }
  
  render() {
    this.state.cityList = this.getCityList()
    console.log('cityList:', this.state.cityList)
 
    return (
      <div>
        <select id="selectCity" className= "dropdown" onChange={this.toggleVisibility}>
          <option>Select a city</option>
          {this.state.cityList}
        </select>
      
      {this.state.detailsVisible && <WeatherDetails />}
      
      </div>
    )
  }
}