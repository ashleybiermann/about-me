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

// Question 4 and 5 are taken care of. Commented out the code just in case something breaks during test.

//4. does ashley like to kayak? - YES
//console.log first
// var likeToKayak = prompt().toUpperCase();
// console.log(userName + "'s answer to 'likes to kayak': " + likeToKayak);
// // alert with response telling them if correct
// if(likeToKayak === "YES") {
//   alert();
//   correctAnswers++;
//   console.log('correct kayak answer! total correct answers: ' + correctAnswers);
// } else {
//   alert();
// }

// //5. does ashley like to bake? - NO
// //console.log first
// var likeToBake = prompt().toUpperCase();
// console.log(userName + "'s answer to 'likes to bake': " + likeToBake);
// // alert with response telling them if correct
// if(likeToBake === "YES") {
//   alert();
// } else {
//   alert();
//   correctAnswers++;
//   console.log('correct baking answer! total correct answers: ' + correctAnswers);
// }

//Add another question, number guessing game
//6. correct answer is 4

//var ashleysFavNum = 4;

function guessNumberGame(ashleysFavNum) {
  for(var i = 0; i < 4; i++) {
    //Bade helped me figure out to put the prompt inside of the for loop
    var favNumGuess = prompt("Ashley's thinking of a number. You have 4 chances to guess what it is!");
    console.log(userName + "'s " + "number " + (i+1) + "guess: " + favNumGuess);
    if(favNumGuess == ashleysFavNum) {
      alert('Correct! She was thinking of ' + ashleysFavNum + '!');
      correctAnswers++;
      console.log('correct number guess answer! total correct answers: ' + correctAnswers);
      break; //breaking free of the loop once they got it right
      } else if(favNumGuess < ashleysFavNum) {
          alert("Too low, try a higher number.");
      } else {
          alert("Too high, try a lower number.");
    }
  }

  //Mason helped me figure out how to make the code ignore this line if the user guessed right
  if(favNumGuess != ashleysFavNum) {
    alert('That\'s enough guessing for one day... she was thinking of ' + ashleysFavNum);
  }
}

//7. question - user guesses to a question with multiple answers

function figureOutState() {
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
    alert('The two states Ashley has lived in are: ' + ashleysStates[0] + ' and ' + ashleysStates[1]);
  }
}


  
//display the user's name back to them as a final message
function finalMessage() {
  alert('Thank you, ' + userName + 'for taking Ashley\'s \'Getting to Know Me\' quiz. You got ' + correctAnswers + ' answers correct out of 7. Check out this page to learn more!');
}

// function calls
askQuestion("Does Ashley own a dog?", true, "That's correct! Her name is Callie", "She actually does have a dog. Her name is Callie.");
askQuestion("Does Ashley prefer sunny days over rainy days?", true, "You've got it! She definitely prefers the sunshine.", "Rain, rain, go away, Ashley prefers a sunny day. Let's try this one...");
askQuestion("Does Ashley do yoga?", false, "Correct! She does not really like yoga. There's just something about it...", "Nah, she never really got into it, and it still alludes her.");
askQuestion("Does Ashley like to kayak?", true, "Indeed, and Callie comes with her, too!", "Ashley DOES like to kayak. Callie comes with her, too!");
askQuestion("Does Ashley like to bake?", false, "Exactly, she does not like to bake, but she does like to eat baked goods.", "She loves to eat baked goods, but she does NOT like to bake much on her own.");
guessNumberGame(4);
figureOutState();

finalMessage();
