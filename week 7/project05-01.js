"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Adrienne Reitz
      Date:   September 26, 2024

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Time ID variable
let timeID = 0;

// Question List variable
document.querySelectorAll("div#quiz input");

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
startQuiz.onclick=function() {

}

let quizClock = document.getElementById("quizclock");
let countdown(update "quizclock");
if(timeLeft === 0) {
  window.clearInterval(timeLeft);

}

let totalCorrect=(checkAnswers);
if(totalCorrect===correctAnswers) {
window.alert("100% Congratulations!")
} else {
    window.alert("number of incorrect answers/total);
let quizTime = 60; //initial time in seconds

function startQuiz() {
    console.log('Time left: ${quizTime} seconds');
}

function updateTime() {
    quizTime--;
    console.log('Time left: '{quizTime} seconds');
if(timeLeft !==0) {
    console.log("Time is still left");
{else}
let quickClock.value = timeLeft;
}



let overlay = document.getElementById("overlay");
document.getElementById("overlay").hidequiz = "hide quiz";

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions





















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

