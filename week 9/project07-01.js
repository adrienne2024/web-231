"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Adrienne Reitz
      Date:  October 10, 2024 

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) { 
    e.preventDefault();
   let pwd = document.getElementById("pwd").value;
   let feedback = document.getElementById("feedback");

   let regex1 = /[A-Z]/;
   let regex2 = /[0-9]/;
   let regex3 = /[!$#%]/;

   if (pwd.length < 8) {
    feedback.textContent = 'Your password must be at least 8 characters';
   }else{
    feedback.textContent = '';
   }

   if(!/[A-Z]/.test(pwd)) {
   feedback.textContent = "Your password must contain an uppercase letter";
   }

   if(!/[0-9]/.test(pwd)) {
   feedback.textContent = "Your password must include a number";
   }
   
    
   if(!/[!$#%]/.test(pwd)) {
   feedback.textContent = "Your password must include one of the following !#$%";
   }

   submitForm();
    var form = document.getElementById("signupForm");
    form.submit();
   }
       
   
   
   

   
   

);