const request = require('postman-request')

const url = `http://api.weatherstack.com/current?access_key=a698ef9c949949b5a5b87c72a693b984&query=37.8267,-122.4233&units=f`

request({ url: url, json: true }, (error, response) => {
  let current = response.body.current
  console.log(current.weather_descriptions[0] + `. It is currently ${current.temperature} degrees out. It feels like ${current.feelslike} degrees out.`)
})
