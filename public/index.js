// console.log("test");

// 🍂Declare class🍃
class Data {
  constructor(
    totalBill,
    numGuests,
    servQual,
    totalTip,
    totalTipPercentage,
    tipPerPerson
  ) {
    (this.totalBill = totalBill),
      (this.numGuests = numGuests),
      (this.servQual = servQual),
      (this.totalTip = totalTip),
      (this.totalTipPercentage = totalTipPercentage),
      (this.tipPerPerson = tipPerPerson);
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
  get getTotalTip() {
    return this.totalTip;
  }
  get getTotalTipPercentage() {
    return this.totalTipPercentage;
  }
  get getTipPerPerson() {
    return this.tipPerPerson;
  }
  set setTotalBill(newTotalBill) {
    this.totalBill = newTotalBill;
  }
  set setNumGuests(newNumGuests) {
    this.numGuests = newNumGuests;
  }
  set setServQual(newServQual) {
    this.servQual = newServQual;
  }
  set setTotalTip(newTotalTip) {
    this.totalTip = newTotalTip;
  }
  set setTotalTipPercentage(newTotalTipPercentage) {
    this.totalTipPercentage = newTotalTipPercentage;
  }
  set setTipPerPerson(newTipPerPerson) {
    this.tipPerPerson = newTipPerPerson;
  }
}

// 🍂Variables for building event handler🍃
// 🌿Global variables🌿
// Instance of Data object
let inputs = new Data();
//Declaring the history array as a global variable. and also to actually append things
let histArr = [];

// 🌿References to DOM elements🌿
// The only form on the website
let formRef = document.querySelector("form");

// User inputs
let totalBillRef = document.getElementById("totalBill"),
  numGuestsRef = document.getElementById("numGuests"),
  servQualRef = document.getElementById("servQual");
// Field for displaying user inputs
let displayTotalBillRef = document.getElementById("totalBillDisplay"),
  displayNumGuestsRef = document.getElementById("numGuestsDisplay"),
  displayServQualRef = document.getElementById("servQualDisplay");
// Field for displaying Calculated values
let totalTipRef = document.getElementById("totalTip"),
  totalTipPercentageRef = document.getElementById("totalTipPercentage"),
  tipPerPersonRef = document.getElementById("tipPerPerson");

// Field for displaying previous user input
let prevTotalBillDisplayRef = document.getElementById("prevTotalBillDisplay"),
  prevNumGuestsDisplayRef = document.getElementById("prevNumGuestDisplay"),
  prevServQualDisplayRef = document.getElementById("prevServQualDisplay");
// Field for displaying previous calculated values
let prevTotalTipRef = document.getElementById("prevTotalTip"),
  prevTotalTipPercentageRef = document.getElementById("prevTotalTipPercentage"),
  prevTipPerPersonRef = document.getElementById("prevTipPerPerson");

let historyNumberRef = document.getElementById("historyNumber");

// 🍂Component functions for handleSubmit() event handler🍃
// 🌿Fill inputs instance with user inputs🌿
function initializeData(e) {
  //Prevents page refresh on submit
  e.preventDefault();

  // Store users inputs in inputs instance
  inputs.setTotalBill = totalBillRef.value;
  inputs.setNumGuests = numGuestsRef.value;
  inputs.setServQual = servQualRef.value;

  // Clear user input boxes
  totalBillRef.value = null;
  numGuestsRef.value = null;
  servQualRef.value = null;
}

//🌿Tip calculations🌿
function calculate() {
  // Calculate outputs

  // 🍁Need to determine formula for multiplier🍁
  // let multiplier =
  //   1 + Number(inputs.getNumGuests > 1) * 0.03 * inputs.getNumGests;
  let multiplier = 1;
  inputs.setTotalTipPercentage = (
    0.05 *
    inputs.getServQual *
    multiplier *
    100
  ).toFixed(2);
  inputs.setTotalTip = (
    (inputs.getTotalBill * inputs.getTotalTipPercentage) /
    100
  ).toFixed(2);
  inputs.setTipPerPerson = (inputs.getTotalTip / inputs.getNumGuests).toFixed(
    2
  );
}

// 🌿Displays current user inputs and current calculated values🌿
function displayCurrent() {
  displayTotalBillRef.textContent = `\$${inputs.getTotalBill}`;
  if (inputs.getNumGuests > 1) {
    displayNumGuestsRef.textContent = `${inputs.getNumGuests} people`;
  } else {
    displayNumGuestsRef.textContent = `${inputs.getNumGuests} person`;
  }
  displayServQualRef.textContent = `${inputs.getServQual} / 5`;

  totalTipPercentageRef.textContent = `${inputs.getTotalTipPercentage}%`;
  totalTipRef.textContent = `\$${inputs.getTotalTip}`;
  tipPerPersonRef.textContent = `\$${inputs.getTipPerPerson}`;
}

// 🌿Stores history of inputs instances in histArr🌿
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#enumerate_the_properties_of_an_object
function storeHistory() {
  // new Data() isntance will be
  // added at (legnth + 1) index
  // of histArr
  let i = histArr.length;
  // console.log("i is: " + i);
  // insert new Data() instance at end of histArr
  histArr.push(new Data());

  // populate new Data() instance with
  // values from inputs instance
  for (const property in inputs) {
    histArr[i][property] = inputs[property];
  }

  // enable display of previous submissions
  console.log(historyNumberRef);
  historyNumberRef.removeAttribute("disabled");
  historyNumberRef.setAttribute("max", i + 1);
  console.log(historyNumberRef.getAttribute("max"));
}

// 🍂Combine event handler component functions🍃
function handleSubmit(e) {
  initializeData(e);
  calculate();
  storeHistory();
  displayCurrent();
  console.log(histArr);
}

// 🍂Attatch event handler to form that fires on submission🍃
formRef.addEventListener("submit", handleSubmit);

// 🍂Event handler for previous submission history🍃
// 🌿Displays previous user inputs and previous calculated values🌿
function displayPrevious(e) {
  let i = e.target.value - 1;
  // console.log(e);
  // console.log(e.target);
  // console.log(e.target.value);
  // console.log(e.currentTarget.value);
  console.log(i);
  console.log(histArr[i]);

  prevTotalBillDisplayRef.textContent = `\$${histArr[i].getTotalBill}`;
  //   if (inputs.getNumGuests > 1) {
  //     displayNumGuestsRef.textContent = `${inputs.getNumGuests} people`;
  //   } else {
  //     displayNumGuestsRef.textContent = `${inputs.getNumGuests} person`;
  //   }
  //   displayServQualRef.textContent = `${inputs.getServQual} / 5`;

  //   totalTipPercentageRef.textContent = `${inputs.getTotalTipPercentage}%`;
  //   totalTipRef.textContent = `\$${inputs.getTotalTip}`;
  //   tipPerPersonRef.textContent = `\$${inputs.getTipPerPerson}`;
  // if (i < 1) {
  //   return null;
  // } else {
  // }
}

// 🍂Attatch event handler to input that fires
// whenever input value changes🍃
historyNumberRef.addEventListener("change", displayPrevious);
// 🍂Previous attempts🍃

// 🌿data()🌿
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

// 🌿initializeData()🌿
// Comments for initializeData():
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

// 🌿Append to history from inside calculate()🌿
// Appends the inputs and calculations as an array, and appends that array to the array.
// histArr.push([
//   displayTotalBillRef.textContent,
//   displayNumGuestsRef.textContent,
//   displayServQualRef.textContent,
//   totalTipPercentageRef.textContent,
//   totalTipRef.textContent,
//   tipPerPersonRef.textContent,
// ]);

// 🌿storeHistory()🌿
// Does not work because this passes a
// reference to the inputs object
// function storeHistory() {
//   histArr.push(inputs);
// }

// 🌿Example🌿
// let arr = [];
// arr = [[inputs.getTotalBill, ...], []]
// arr = [inputs_1, inputs_2, ...]
// arr[1].getTotalBill
// HistoryArr = [[inputs.getTotalBill, ...], []]
// let historyRef = document.querySelector(`history`)

// 🌿history()🌿
// 🥬References to history display🥬
// let prevDisplayTotalBillRef = [];
// let prevDisplayNumGuestsRef = [];
// let prevDisplayServQualRef = [];
// let prevTotalTipRef = [];
// let prevTotalTipPercentageRef = [];
// let prevTipPerPersonRef = [];
// let temp = [];
// let HistoryArr = [];

// function tempfunction() {
//   temp = [inputs.totalBill, inputs.numGuests, inputs.servQual];
//   HistoryArr.push(temp);
// }

// 🥬history() function itself🥬
// console.log(totalTipPercentageRef);
// // The function that is supposed to log the history
// function history(e) {
//   // Both of these work, so that's something
//   // console.log(histArr[0][0]);
//   // console.log(histArr);
//   for (let i = 0; i < histArr.length; i++) {
//     prevDisplayTotalBillRef[i] = histArr[i][0];
//     prevDisplayNumGuestsRef[i] = histArr[i][1];
//     prevDisplayServQualRef[i] = histArr[i][2];
//     prevTotalTipPercentageRef[i] = histArr[i][3];
//     prevTotalTipRef[i] = histArr[i][4];
//     prevTipPerPersonRef[i] = histArr[i][5];
//   }
//   if (histArr.length > 1) {
//     document.getElementById("prevTotalTip").innerHTML =
//       prevTotalTipRef[histArr.length - 2];
//     document.getElementById("prevTotalTipPercentage").innerHTML =
//       prevTotalTipPercentageRef[histArr.length - 2];
//     document.getElementById("prevTipPerPerson").innerHTML =
//       prevTipPerPersonRef[histArr.length - 2];
//     document.getElementById("prevTotalBillDisplay").innerHTML =
//       prevDisplayTotalBillRef[histArr.length - 2];
//     document.getElementById("prevNumGuestsDisplay").innerHTML =
//       prevDisplayNumGuestsRef[histArr.length - 2];
//     document.getElementById("prevServQualDisplay").innerHTML =
//       prevDisplayServQualRef[histArr.length - 2];
//   }
// }

// 🌿Store history method via inner arrays🌿
// console.log(histArr);
// let i = histArr.length;
// histArr.push([]);
// console.log(histArr);
// for (const property in inputs) {
//   histArr[i].push(inputs[property]);
// }
