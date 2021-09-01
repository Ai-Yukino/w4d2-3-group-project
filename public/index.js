// console.log("test");

// 🍂Declare class🍃
class Data {
  constructor(totalBill, numGuests, servQual) {
    (this.totalBill = totalBill),
      (this.numGuests = numGuests),
      (this.servQual = servQual);
  }
  get getTotalBill() {
    return this.totalBill;
  }
  get getNumGuests() {
    return this.numGuests;
  }
  get getServQual() {
    return this.servQual;
  }
  setTotalBill(newTotalBill) {
    this.totalBill = newTotalBill;
  }
  setNumGuests(newNumGuests) {
    this.numGuests = newNumGuests;
  }
  setServQual(newServQual) {
    this.servQual = newServQual;
  }
}

// let placehold;
// function data() {
//   (totalBill = document.getElementById("totalBill").value),
//     (numGuests = document.getElementById("numGuests").value),
//     (servQual = document.getElementById("servQual").value);
//   let temp = new Data(totalBill, numGuests, servQual);
//   console.log(temp);
//   placehold = temp;
//   // I don't know how to actually extract this since it's within a function
//   // If I can't figure it out then I guess the tip calculation would have to be done here
// }

// In response to the above comments,
// We can access placehold after calling it, e.g. from an event handler
// Also, we can rewrite "data" above using class methods
// See the following sections's approach

// 🍂Event handler pieces for form submission🍃

// Instance of Data object
let inputs = new Data();

// References to DOM elements
let formRef = document.querySelector("form");
let totalBillRef = document.getElementById("totalBill"),
  numGuestsRef = document.getElementById("numGuests"),
  servQualRef = document.getElementById("servQual");
let displayTotalBillRef = document.getElementById("totalBillDisplay"),
  displayNumGuestsRef = document.getElementById("numGuestsDisplay"),
  displayServQualRef = document.getElementById("servQualDisplay");
let totalTipRef = document.getElementById("totalTip"),
  totalTipPercentageRef = document.getElementById("totalTipPercentage"),
  tipPerPersonRef = document.getElementById("tipPerPerson");

// 🌿Fill inputs instance with user inputs🌿
function initializeData(e) {
  e.preventDefault();
  // ^ Prevents page refresh on submit

  // Store users inputs in inputs
  inputs.setTotalBill(totalBillRef.value);
  inputs.setNumGuests(numGuestsRef.value);
  inputs.setServQual(servQualRef.value);

  // Clear user input boxes
  totalBillRef.value = null;
  numGuestsRef.value = null;
  servQualRef.value = null;

  console.log(inputs);
  // Why .value for retrieving user inputs
  // and .textContent for displaying user inputs?
  // From https://stackoverflow.com/a/63179925
  // it seems like .value is the only way to retriev data from form inputs,
  // but from https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
  // .textContent gets the literal text content of a node as well as all
  // its descendents. My guess is that .textContent is best practice in most
  // situations because you want to overwrite the entire node.
  // I think .value can still work for the second section in our case,
  // but I just wanted to be safe.
}

//🌿Need output formatting
// and formula for multiplier🌿
function calculate(e) {
  // Display user inputs in display box
  displayTotalBillRef.textContent = inputs.getTotalBill;
  displayNumGuestsRef.textContent = inputs.getNumGuests;
  displayServQualRef.textContent = inputs.getServQual;

  // Calculate outputs
  let multiplier = 1;
  totalTipPercentageRef.textContent = 0.05 * inputs.getServQual * multiplier * 100;
  totalTipRef.textContent =
    inputs.getTotalBill * totalTipPercentageRef.textContent/100;
  tipPerPersonRef.textContent = (
    totalTipRef.textContent / inputs.getNumGuests
  ).toFixed(2);
}

// 🍂Combine event handler pieces and attach it to form🍃
function handleSubmit(e) {
  initializeData(e);
  calculate(e);
}

// Attatch event handler to form
// that fires when submited
formRef.addEventListener("submit", handleSubmit);