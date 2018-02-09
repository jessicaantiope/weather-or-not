import React from 'react'

import WeatherDetails from './WeatherDetails'

export default class CityList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      detailsVisible: false
      // states got here
    }
    // binds go here
  }
  toggleVisibility() {
    this.setState({detailsVisible: true})
  }
  // functions go here
  render() {
    return (
      <div>

      {this.state.detailsVisible && <WeatherDetails />}
      
      </div>
    )
  }
}