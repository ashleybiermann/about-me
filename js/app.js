'use strict';

//greet the user, ask for their name, display name back, welcome them to the site
var userName = prompt('Welcome! What is your name?');
console.log('userName: ' + userName);
alert('Welcome, ' + userName + '! It\'s great to see you. Take this mini quiz and review your answers to see how much you know about Ashley. Let\'s start!');

//TODO: take into consideration case sensitivity --HINT .toUpperCase() or .toLowerCase()

//counter for number of corrct answers
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

//6. number guessing game with 4 chances to get it right
//TODO: refactor ashleysFavNum to represent a number she is thinking of
function guessNumberGame(ashleysFavNum) {
  for(var i = 0; i < 4; i++) {
    //Bade helped me figure out to put the prompt inside of the for loop
    var favNumGuess = prompt('Ashley\'s thinking of a number. You have 4 chances to guess what it is!');
    console.log(userName + '\'s ' + 'number ' + (i+1) + 'guess: ' + favNumGuess);
    if(favNumGuess == ashleysFavNum) {
      alert('Correct! She was thinking of ' + ashleysFavNum + '!');
      correctAnswers++;
      console.log('correct number guess answer! total correct answers: ' + correctAnswers);
      break;
    } else if(favNumGuess < ashleysFavNum) {
      alert('Too low, try a higher number.');
    } else {
      alert('Too high, try a lower number.');
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
  for(var guesses = 0; guesses < 6; guesses++) {
    var stateGuess = prompt('Ashley has lived in two states. Try to guess one!');
    console.log(userName + '\'s state guess: ' + stateGuess);
    // TODO: adjust states capitalization... maybe changes the alert message
    // TODO: remove the hard coding references in the array
    var theyWereRight = false;
    for (var stateIndex = 0; stateIndex < ashleysStates.length; stateIndex++) {
      if(stateGuess === ashleysStates[stateIndex]) {
        theyWereRight = true;
      }
    }
    if(theyWereRight) {
      alert('Correct! The two states Ashley has lived in are: ' + ashleysStates[0] + ' and ' + ashleysStates[1]);
      break;
    } else if (guesses === 5) {
      alert('That\'s enough guessing for today. The two states Ashley has lived in are: ' + ashleysStates[0] + ' and ' + ashleysStates[1]);
    } else {
      alert('Cool state! But Ashley hasn\'t lived there. Try again.');
    }
  }
}

//display the user's name back to them as a final message
function finalMessage() {
  alert('Thank you, ' + userName + 'for taking Ashley\'s \'Getting to Know Me\' quiz. You got ' + correctAnswers + ' answers correct out of 7. Check out this page to learn more!');
}

// function calls
askQuestion('Does Ashley own a dog?', true, 'That\'s correct! Her name is Callie', 'She actually does have a dog. Her name is Callie.');
askQuestion('Does Ashley prefer sunny days over rainy days?', true, 'You\'ve got it! She definitely prefers the sunshine.', 'Rain, rain, go away, Ashley prefers a sunny day. Let\'s try this one...');
askQuestion('Does Ashley do yoga?', false, 'Correct! She does not really like yoga. There\'s just something about it...', 'Nah, she never really got into it, and it still alludes her.');
askQuestion('Does Ashley like to kayak?', true, 'Indeed, and Callie comes with her, too!', 'Ashley DOES like to kayak. Callie comes with her, too!');
askQuestion('Does Ashley like to bake?', false, 'Exactly, she does not like to bake, but she does like to eat baked goods.', 'She loves to eat baked goods, but she does NOT like to bake much on her own.');
guessNumberGame(4);
figureOutState();
finalMessage();
