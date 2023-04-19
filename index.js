/*
let firstCard = 9
let secondCard = 9
let sum = firstCard + secondCard

if (sum < 21) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
} else {
    console.log("You're out of the game! 😭")
}
*/

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases
/*
let age = 19

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome

if(age === 21) {
    console.log(" you are old enough to enter the nightClub")
} else if ( age < 21){
    console.log("You can not enter the club!")
} else {
    console.log("Welcome")
}
*/
/*
// Check if the person is elegible for a birthday card from the King! (100)

let age = 100

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if (age < 100) {
    console.log("Not elegible")
} else if (age === 100) {
    console.log("Here is your birthday card from the King!")
} else {
    console.log("Not elegible, you have already gotten one")
}
*/
/*
let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard + 4
let hasBlackJack = false
let isAlive = true

if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
    hasBlackJack = true
} else {
    console.log("You're out of the game! 😭")
    isAlive = false
}

console.log(isAlive)
*/

/*
console.log(4 === 3)  //  false 
console.log(5 > 2)    //  true
console.log(12 > 12)  // false 
console.log(3 < 0)    // false 
console.log(3 >= 3)   //  true 
console.log(11 <= 11) //true
console.log(3 <= 2)   // false

*/

let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
// 1. Declare a variable called message and assign its value to an empty string

let message = ""

// 2. Reassign the message variable to the string we're logging out



if (sum <= 20) {
 message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
  message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
} else {
   message = "You're out of the game! 😭"
    isAlive = false
}

// 3. Log it out!

console.log(message)