const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHERSTACK}&query=${latitude},${longitude}&units=f`
  request({ url: url, json: true}, (error, response) => {
    if (error){
      callback("Unable to connect to weather services!")
    } else if (response.body.error){
      callback("Unable to find location.")
    } else {
      callback(undefined, {
        temperature: response.body.current.temperature,
        feelslike: response.body.current.feelslike,
        overall: response.body.current.weather_descriptions[0]
      })
    }
  })
}

module.exports = forecast
