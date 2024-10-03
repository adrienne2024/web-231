"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Adrienne Reitz
      Date:   October 3, 2024

      Filename: project06-03.js
*/

const useShip=document.getElementById("useShip");
window.addEventListener("click", function()) {
    let useShip=document.forms.useShip;
    let model=useShip.elements.model;
}

function copyShippingToBilling(form) {
    if(form.shippingToBilling.checked) {
        form.billingName.Value = form.shippingName.value;
        form.billingAddress1.value = form.shippingAddress1.value;
        form.billingAddress2.value = form.shippingAddress2.value;
        form.billingCity.value = form.shippingCity.value;
        form.billingState.value = form.shippingState.value;
        form.billingCountry.value = form.shippingCountry.value;
        form.billingCode.value = form.shippingCode.value;
    }
}

document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
document.getElementById("cityBill").value = document.getElementById("cityShip").value;
document.getElementById("countryBill").value = document.getElementById("countryShip").value;
document.getElementById("codeBill").value = document.getElementById("codeShip").value;

document.getElementById("stateBill").selectedIndex = document.getElementById("stateShip").selected.Index;

const formElements = document.querySelectorAll("input[type='text']");

const fieldCount = formElements.length;

var errorBox = document.getElementById("errorBox");

for (let i = 0; i < formElements.length; i++) {
    let element = formElements[i].addEventListener('invalid', showValidationError);
    
}

function showValidationError(evt) {
    evt.preventDefault();

}

document.getElementById("errorBox").textContent = "Complete all highlighted fields";