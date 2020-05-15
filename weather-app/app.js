require('dotenv').config()
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const input = process.argv[2]

if(!input){
  return console.log("Please provide a location")
}

geocode(input, (error, data) => {
  if (error){
    return console.log("Error:", error)
  }
  if (data){
    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error){
        return console.log("Error:", error)
      }
      console.log(data.location)
      console.log(forecastData.overall + `. It is currently ${forecastData.temperature} degrees out. It feels like ${forecastData.feelslike} degrees out.`)
    })
  }
})
