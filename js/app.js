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
//console.log first, later change to alert with response
var haveADog = prompt("Does Ashley own a dog?");
console.log(userName + "'s answer to 'has dog': " + haveADog);

//2. does ashley prefer sunny days over rainy days? - YES
//console.log first, later change to alert with response
var sunnyOverRainy = prompt("Does Ashley prefer sunny days over rainy days?");
console.log(userName + "'s answer to 'sunny over rainy': " + sunnyOverRainy);

//3. does ashley do yoga? - NO
//console.log first, later change to alert with response
var doesYoga = prompt("Does Ashley do yoga?");
console.log(userName + "'s answer to 'does yoga': " + doesYoga);

//4. does ashley like to kayak? - YES
//console.log first, later change to alert with response
var likeToKayak = prompt("Does Ashley like to kayak?");
console.log(userName + "'s answer to 'likes to kayak': " + likeToKayak);

//5. does ashley like to bake? - NO
//console.log first, later change to alert with response
var likeToBake = prompt("Does Ashley like to bake?");
console.log(userName + "'s answer to 'likes to bake': " + likeToBake);

//display the user's name back to them as a final message
alert("Thank you, " + userName + " for taking Ashley's 'Getting to Know Me' quiz. Check out this page to see how you did!");