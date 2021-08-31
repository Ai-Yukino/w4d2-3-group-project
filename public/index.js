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

// 🍂Get input data after submit🍃
let inputs = new Data();
let formRef = document.querySelector("form");

function initializeData(e) {
  e.preventDefault();
  // ^ prevents page refresh on submit
  inputs.setTotalBill(document.getElementById("totalBill").value);
  inputs.setNumGuests(document.getElementById("numGuests").value);
  inputs.setServQual(document.getElementById("servQual").value);
  console.log(inputs);
}

formRef.addEventListener("submit", initializeData);

// 🍂Arithmetic🍃
