const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Guillamoure'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: "About Me",
    name: "Guillamoure"
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: "Help",
    message: "Oh god, everything is on fire!!!"
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forecase: "Not good bud",
    location: "Nowheresville, CA"
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})
