import React from 'react'

import CityList from './CityList'
// import WeatherDetails from './WeatherDetails'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
// states got here
    }
// binds go here
  }
// functions go here
  render () {
    return (
      <div className="container">
        <h1 className="title">Weather Or Not?</h1>
        <br/>
        <h3 className="subtitle"> Choose your city to see current weather:</h3>
        <CityList />
      </div>
    )
  }
}
