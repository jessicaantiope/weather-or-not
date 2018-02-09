var data = require('./../images.json').cities

function findCoords (cityName) {
  var city = data.find(city => city.name === cityName)
  return city.coords
}

module.export = {
  findCoords: findCoords
}