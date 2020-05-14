const request = require('postman-request')
require('dotenv').config()


const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHERSTACK}&query=37.8267,-122.4233&units=f`

request({ url: url, json: true }, (error, response) => {
  let current = response.body.current
  console.log(current.weather_descriptions[0] + `. It is currently ${current.temperature} degrees out. It feels like ${current.feelslike} degrees out.`)
})
