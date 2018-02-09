import React from 'react'


export default WeatherDetails (props) => {

  return (
    <div><h1>{props.icon}</h1>
      <img src={getImageLinkOf(props.icon)}></img>
      <p>Summary: {props.summary}</p>
      <p>Probability: {props.precipProbability}</p>
      <p>Temperature: {props.temperature} Fahrenheit</p>
      <p>Humidity: {Math.floor(props.humidity * 100)}%</p>
      <p>windspeed: {props.windSpeed} </p>
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

