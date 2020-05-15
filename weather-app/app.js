require('dotenv').config()
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode("New York City", (error, data) => {
  console.log("Error:", error)
  console.log("Data:", data)
})

forecast(44.1545, -75.7068, (error, data) => {
  console.log("Error:", error)
  console.log(data.overall + `. It is currently ${data.temperature} degrees out. It feels like ${data.feelslike} degrees out.`)
})
