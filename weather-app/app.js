const request = require('postman-request')

const url = `http://api.weatherstack.com/current?access_key=a698ef9c949949b5a5b87c72a693b984&query=37.8267,-122.4233`

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body)

  console.log(data.current)
})
