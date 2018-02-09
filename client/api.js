import request from 'superagent'

import CityList from './CityList'

const baseUrl = "https://api.darksky.net/forecast/"
const apiKey = '10b4534db4f46ed7adf2f97c71816d5d'
// const coordinates = CityList.coordinates

export function getWeather (callback, coords) {
  request
    .get(baseUrl + apiKey + '/' + coords)
    .end((err, res) => {
      callback(err, res.body)
    })
}

/*Wellington
41.2865,174.7762

Hochiminh
10.8231,106.6297

Toronto
43.6570304,-79.6017278


Sydney
-33.8678693,151.1924394

Pangkor
4.2271864,100.5239914

*/

