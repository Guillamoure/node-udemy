console.log("Client side javascript file is loaded.")
const form = document.querySelector('form')
const input = document.querySelector('input')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  runFetch(input.value)
})

const runFetch = (location) => {
  fetch(`http://localhost:3000/weather?address=${location}`)
    .then(r => r.json())
    .then(data => {
      if (data.error){
        console.log(data.error)
      } else {
        console.log(data)
      }
    })
}
