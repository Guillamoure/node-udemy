const request = require('postman-request')
require('dotenv').config()

const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHERSTACK}&query=37.8267,-122.4233&units=f`

request({ url: url, json: true }, (error, response) => {
  if (error){
    console.log("Unable to connect to weather service!")
  } else if (response.body.error) {
    console.log("Unable to find location")
  } else {
    let current = response.body.current
    console.log(current.weather_descriptions[0] + `. It is currently ${current.temperature} degrees out. It feels like ${current.feelslike} degrees out.`)
  }
})

const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZ3VpbGxhbW91cmUiLCJhIjoiY2thNzZkZ2xyMDAyODJ4cDRqcGU5bHdpYyJ9.VHmdCno_w5xu3be1pV8R6Q"

request({url: geocodeURL, json: true}, (error, response) => {
  if (error){
    console.log("Unable to connect to geocoding service!")
  } else if (response.body.features.length === 0){
    console.log("Unable to find location. Try again with different search term.")
  } else {
    let location = response.body.features[0]
    const latitude = location.center[1]
    const longitude = location.center[0]
    console.log(location.center)
  }
})
