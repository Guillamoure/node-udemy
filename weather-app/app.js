require('dotenv').config()
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const input = process.argv[2]

if(!input){
  return console.log("Please provide a location")
}

geocode(input, (error, { latitude, longitude, location } = {} ) => {
  if (error){
    return console.log("Error:", error)
  } else {
    forecast(latitude, longitude, (error, { overall, temperature, feelslike}) => {
      if (error){
        return console.log("Error:", error)
      }
      console.log(location)
      console.log(overall + `. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`)
    })
  }
})
