// const square = function(x){
//   return x * x
// }

// const square = x => x * x
//
// console.log(square(5))


const event = {
  name: "Barry's Wonderland",
  guestList: [
    "Jack",
    "Jen",
    "Mike"
  ],
  printGuestList() {
    console.log('Guest List for ' + this.name)
    this.guestList.forEach((guest) => console.log(guest + ' is attending ' + this.name))
  }
}

event.printGuestList()
