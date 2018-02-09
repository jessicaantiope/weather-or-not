import React from 'react'



const currentWeather = {
  "time": 1518132575,
  "summary": "Light Rain and Windy",
  "icon": "rain",
  "precipIntensity": 0.058,
  "precipProbability": 0.7,
  "precipType": "rain",
  "temperature": 44.54,
  "apparentTemperature": 34.41,
  "dewPoint": 36.63,
  "humidity": 0.74,
  "pressure": 995.71,
  "windSpeed": 31.5,
  "windGust": 39.44,
  "windBearing": 251,
  "cloudCover": 0.94,
  "uvIndex": 1,
  "visibility": 2.6,
  "ozone": 392.07
}

export default ({/*argument*/ }) => {

  return (
    <div><h1>{currentWeather.icon}</h1>
      <img src={getImageLinkOf(currentWeather.icon)}></img>
      <p>Summary: {currentWeather.summary}</p>
      <p>Probability: {currentWeather.precipProbability}</p>
      <p>Temperature: {currentWeather.temperature} Fahrenheit</p>
      <p>Humidity: {Math.floor(currentWeather.humidity * 100)}%</p>
      <p>windspeed: {currentWeather.windSpeed} </p>
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


/*
icon
summary
preciprobality
temperature
humidity
windspeed


*/


/*
"latitude": 10.8231,
    "longitude": 106.6297,
    "timezone": "Asia/Ho_Chi_Minh",
    "currently": {
        "time": 1518133778,
        "summary": "Partly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 71.4,
        "apparentTemperature": 72.55,
        "dewPoint": 68.86,
        "humidity": 0.92,
        "pressure": 1012.71,
        "windSpeed": 3.73,
        "windGust": 9.86,
        "windBearing": 148,
        "cloudCover": 0.26,
        "uvIndex": 0,
        "visibility": 4.97,
        "ozone": 248.44
    },
*/

/*
"timezone": "America/Toronto",
    "currently": {
        "time": 1518134326,
        "summary": "Clear",
        "icon": "clear-night",
        "nearestStormDistance": 36,
        "nearestStormBearing": 109,
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 17.42,
        "apparentTemperature": 5.63,
        "dewPoint": 8.14,
        "humidity": 0.66,
        "pressure": 1027.72,
        "windSpeed": 10.03,
        "windGust": 19.21,
        "windBearing": 238,
        "cloudCover": 0.15,
        "uvIndex": 0,
        "visibility": 10,
        "ozone": 357.96
    },
*/

/*
"latitude": -33.8678693,
    "longitude": 151.1924394,
    "timezone": "Australia/Sydney",
    "currently": {
        "time": 1518134578,
        "summary": "Clear",
        "icon": "clear-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 81.11,
        "apparentTemperature": 83.08,
        "dewPoint": 65.46,
        "humidity": 0.59,
        "pressure": 1013.88,
        "windSpeed": 6.51,
        "windGust": 6.51,
        "windBearing": 142,
        "cloudCover": 0.16,
        "uvIndex": 9,
        "visibility": 6.22,
        "ozone": 257.59
    },
    */

    /*
    "latitude": 4.2271864,
    "longitude": 100.5239914,
    "timezone": "Asia/Kuala_Lumpur",
    "currently": {
        "time": 1518134694,
        "summary": "Humid and Partly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0.0018,
        "precipProbability": 0.05,
        "precipType": "rain",
        "temperature": 76.99,
        "apparentTemperature": 78.51,
        "dewPoint": 72.99,
        "humidity": 0.88,
        "pressure": 1010.87,
        "windSpeed": 7.97,
        "windGust": 9.74,
        "windBearing": 116,
        "cloudCover": 0.3,
        "uvIndex": 0,
        "visibility": 3.73,
        "ozone": 245.87
    },
    */

    /*
     "latitude": 4.2271864,
    "longitude": 100.5239914,
    "timezone": "Asia/Kuala_Lumpur",
    "currently": {
        "time": 1518135024,
        "summary": "Humid and Partly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0.0017,
        "precipProbability": 0.05,
        "precipType": "rain",
        "temperature": 77.15,
        "apparentTemperature": 78.66,
        "dewPoint": 72.97,
        "humidity": 0.87,
        "pressure": 1010.92,
        "windSpeed": 8.05,
        "windGust": 9.86,
        "windBearing": 117,
        "cloudCover": 0.31,
        "uvIndex": 0,
        "visibility": 3.73,
        "ozone": 245.9
    },
    */