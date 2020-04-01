'use strict';

//greet the user and ask for their name
//display their name back
//welcome them to the site
var userName = prompt("Welcome! What is your name?");
console.log("userName: " + userName);
alert("Welcome, " + userName + "! It's great to see you. Take this mini quiz and review your answers to see how much you know about Ashley. Let's start!");

//prompt the user with FIVE questions to get to know me more
//yes or no questions
//take into consideration case sensitivity --HINT .toUpperCase() or .toLowerCase()

//1. does ashley have a dog? - YES
//console.log first
var haveADog = prompt("Does Ashley own a dog?").toUpperCase();
console.log(userName + "'s answer to 'has dog': " + haveADog);
// alert with response telling them if correct
if(haveADog === "YES") {
  alert("That's correct! Her name is Callie");
} else {
  alert("She actually does have a dog. Her name is Callie.")
}

//2. does ashley prefer sunny days over rainy days? - YES
//console.log first
var sunnyOverRainy = prompt("Does Ashley prefer sunny days over rainy days?").toUpperCase();
console.log(userName + "'s answer to 'sunny over rainy': " + sunnyOverRainy);
//alert with response telling them if correct
if(sunnyOverRainy === "YES") {
  alert("You've got it! She definitely prefers the sunshine.");
} else {
  alert("Rain, rain, go away, Ashley prefers a sunny day. Let's try this one...");
}

//3. does ashley do yoga? - NO
//console.log first
var doesYoga = prompt("Does Ashley do yoga?").toUpperCase();
console.log(userName + "'s answer to 'does yoga': " + doesYoga);
// alert with response telling them if correct
if(doesYoga === "YES") {
  alert("Nah, she never really got into it, and it still alludes her.");
} else {
  alert("Correct! She does not really like yoga. There's just something about it...");
}

//4. does ashley like to kayak? - YES
//console.log first
var likeToKayak = prompt("Does Ashley like to kayak?").toUpperCase();
console.log(userName + "'s answer to 'likes to kayak': " + likeToKayak);
// alert with response telling them if correct
if(likeToKayak === "YES") {
  alert("Indeed, and Callie comes with her, too!");
} else {
  alert("Ashley DOES like to kayak. Callie comes with her, too!");
}

//5. does ashley like to bake? - NO
//console.log first
var likeToBake = prompt("Does Ashley like to bake?").toUpperCase();
console.log(userName + "'s answer to 'likes to bake': " + likeToBake);
// alert with response telling them if correct
if(likeToBake === "YES") {
  alert("She loves to eat baked goods, but she does NOT like to bake much on her own.");
} else {
  alert("Exactly, she does not like to bake, but she does like to eat baked goods.");
}

//Add another question, number guessing game
//6. correct answer is 4

var ashleysFavNum = 4;

for(var i = 0; i < 4; i++) {
  //Bade helped me figure out to put the prompt inside of the for loop
  var favNumGuess = prompt("What is Ashley's favorite number? Hint: It's between 1 and 10.");
  console.log(userName + "'s " + "number " + (i+1) + "guess: " + favNumGuess);
  if(favNumGuess == ashleysFavNum) {
    (alert("Correct! Her favorite number IS 4!"))
    break; //breaking free of the loop once they got it right
    } else if(favNumGuess < ashleysFavNum) {
        alert("Too low, try a higher number.");
    } else {
        alert("Too high, try a lower number.");
    }
  }

//Mason helped me figure out how to make the code ignore this line if the user guessed right
if(favNumGuess != 4) {
  alert("That's enough guessing for one day... her favorite number is 4.");
}

// add question - user guesses to a question with multiple answers

//display the user's name back to them as a final message
alert("Thank you, " + userName + " for taking Ashley's 'Getting to Know Me' quiz. Check out this page to learn more!");