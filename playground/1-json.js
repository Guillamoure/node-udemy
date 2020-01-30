const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = "Jack"
data.age = "also 27"

const newJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', newJSON)
