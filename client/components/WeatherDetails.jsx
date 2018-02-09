import React from 'react'


export default WeatherDetails (props) => {

  return (
    <div>
      <h1>{props.icon}</h1>
      <img src={getImageLinkOf(props.icon)}></img>
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <tr>
          <td>Summary</td>
          <td>{props.summary}</td>
        </tr>
        <tr>
          <td>Probability</td>
          <td>{props.precipProbability}</td>
        </tr>
        <tr>
          <td>Temperature</td>
          <td>{props.temperature} Fahrenheit</td>
        </tr>
        <tr>
          <td>Humidity</td>
          <td>{Math.floor(props.humidity * 100)}%</td>
        </tr>
        <tr>
          <td>windspeed</td>
          <td>{props.windSpeed}</td>
        </tr>
      </table>
    </div>
  )
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

