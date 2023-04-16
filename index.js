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