 'use strict';

//greet the user and ask for their name
//display their name back
//welcome them to the site
var userName = prompt("Welcome! What is your name?");
console.log("userName: " + userName);
alert("Welcome, " + userName + "! It's great to see you. Take this mini quiz and review your answers to see how much you know about Ashley. Let's start!");

//take into consideration case sensitivity --HINT .toUpperCase() or .toLowerCase()
var correctAnswers = 0;

/* NOTES
>> Create a function 'askQuestion'
>> What's different? The questions, the responses, the correct answers.
>> 1st parameter: string, question
>> 2nd parameter: boolean, rightAnswer -> boolean saying whether yes or no is correct answer
>> 3rd parameter: responseToYes 
>> 4th parameter: responseToNo
*/



function askQuestion(question, rightAnswer, responseToCorrect, responseToWrong) {
  // F2 to rename all variables to the same name
  var usersResponse = prompt(question).toUpperCase();

  if(rightAnswer === true) {

    if(usersResponse === 'YES') {
      alert(responseToCorrect);
      correctAnswers++;
      console.log('correct dog answer! total correct answers: ' + correctAnswers);
    } else {
      alert(responseToWrong);
    }

  } else if(rightAnswer === false) {

    if(usersResponse === 'YES') {
      alert(responseToWrong);
    } else {
      alert(responseToCorrect);
      correctAnswers++;
      console.log('correct dog answer! total correct answers: ' + correctAnswers);
    }

  }
}

askQuestion("Does Ashley own a dog?", true, "That's correct! Her name is Callie", "She actually does have a dog. Her name is Callie.");
// askQuestion("Does Ashley prefer sunny days over rainy days?", true);

//1. does ashley have a dog? - YES
//console.log first
// var haveADog = prompt("Does Ashley own a dog?").toUpperCase();
// console.log(userName + "'s answer to 'has dog': " + haveADog);
// // alert with response telling them if correct
// if(haveADog === "YES") {
//   alert("That's correct! Her name is Callie");
//   correctAnswers++;
//   console.log('correct dog answer! total correct answers: ' + correctAnswers);
// } else {
//   alert("She actually does have a dog. Her name is Callie.")
// }

//2. does ashley prefer sunny days over rainy days? - YES
//console.log first
var sunnyOverRainy = prompt("Does Ashley prefer sunny days over rainy days?").toUpperCase();
console.log(userName + "'s answer to 'sunny over rainy': " + sunnyOverRainy);
//alert with response telling them if correct
if(sunnyOverRainy === "YES") {
  alert("You've got it! She definitely prefers the sunshine.");
  correctAnswers++;
  console.log('correct sunny answer! total correct answers: ' + correctAnswers);
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
  correctAnswers++;
  console.log('correct yoga answer! total correct answers: ' + correctAnswers);
}

//4. does ashley like to kayak? - YES
//console.log first
var likeToKayak = prompt("Does Ashley like to kayak?").toUpperCase();
console.log(userName + "'s answer to 'likes to kayak': " + likeToKayak);
// alert with response telling them if correct
if(likeToKayak === "YES") {
  alert("Indeed, and Callie comes with her, too!");
  correctAnswers++;
  console.log('correct kayak answer! total correct answers: ' + correctAnswers);
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
  correctAnswers++;
  console.log('correct baking answer! total correct answers: ' + correctAnswers);
}

//Add another question, number guessing game
//6. correct answer is 4

var ashleysFavNum = 4;

for(var i = 0; i < 4; i++) {
  //Bade helped me figure out to put the prompt inside of the for loop
  var favNumGuess = prompt("What is Ashley's favorite number? Hint: It's between 1 and 10.");
  console.log(userName + "'s " + "number " + (i+1) + "guess: " + favNumGuess);
  if(favNumGuess == ashleysFavNum) {
    alert("Correct! Her favorite number IS 4!")
    correctAnswers++;
    console.log('correct kayak answer! total correct answers: ' + correctAnswers);
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

//7. question - user guesses to a question with multiple answers

var ashleysStates = ['Michigan', 'Washington'];

  for(var i = 0; i < 6; i++) {
    var stateGuess = prompt('Ashley has lived in two states. Try to guess one!');
    console.log(userName + "'s state guess: " + stateGuess);
    if(stateGuess === ashleysStates[0] || stateGuess === ashleysStates[1]) {
      alert('Correct! She has lived in TWO states, though: ' + ashleysStates[0] + " and " + ashleysStates[1]);
      correctAnswers++;
      console.log('correct state answer! total correct answers: ' + correctAnswers);
      break;
    }
    else {
      alert('Cool state! But Ashley hasn\'t lived there. Try again.');
    }
  }  
if(stateGuess !== ashleysStates[0] || stateGuess !== ashleysStates[1]) {
  alert('The two states Ashley has lived in are: ' + ashleysStates[0] + " and " + ashleysStates[1]);
}
  
//display the user's name back to them as a final message
function finalMessage() {
  alert('Thank you, ' + userName + 'for taking Ashley\'s \'Getting to Know Me\' quiz. You got ' + correctAnswers + ' answers correct out of 7. Check out this page to learn more!');
}

// functions
finalMessage();
