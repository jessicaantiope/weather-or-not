import React from 'react'


export default class WeatherDetails extends React.Component { 
  constructor (props) {
    super(props)
    this.state = {}
  }
render () {
  return (
    <div>
      <h1>{this.props.icon}</h1>
      <img src={getImageLinkOf(this.props.icon)}></img>
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <tr>
          <td>Summary</td>
          <td>{this.props.summary}</td>
        </tr>
        <tr>
          <td>Probability</td>
          <td>{this.props.precipProbability}</td>
        </tr>
        <tr>
          <td>Temperature</td>
          <td>{this.props.temperature} Fahrenheit</td>
        </tr>
        <tr>
          <td>Humidity</td>
          <td>{Math.floor(this.props.humidity * 100)}%</td>
        </tr>
        <tr>
          <td>windspeed</td>
          <td>{this.props.windSpeed}</td>
        </tr>
      </table>
    </div>
  )
  }
}

function getImageLinkOf(icon) {
  if (/rain|shower/.test(icon)) {
    return '/images/rainy.png'
  } else if (/cloudy/.test(icon)) {
    return '/images/cloudy.png'
  } else if (/clear|sunny/.test(icon)) {
    return '/images/sunny.png'
  } else if (/lightning|thunder/.test(icon)) {
    return '/images/lightning'
  } else if (/snow/.test(icon)) {
    return '/images/snowy.png'
  } else {
    return '/images/background.jpg'
  }

}