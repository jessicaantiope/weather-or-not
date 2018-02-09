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
      <div>
        <h1>Hello team weather</h1>
        <CityList />
      </div>
    )
  }
}
