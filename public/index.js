// console.log("test");

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
  set setTotalBill(newTotalBill) {
    this.totalBill = newTotalBill;
  }
  set setNumGuests(newNumGuests) {
    this.numGuests = newNumGuests;
  }
  set setServQual(newServQual) {
    this.servQual = newServQual;
  }
}

let placehold;
function data() {
  (totalBill = document.getElementById("totalBill").value),
    (numGuests = document.getElementById("numGuests").value),
    (servQual = document.getElementById("servQual").value);
  let temp = new Data(totalBill, numGuests, servQual);
  console.log(temp);
  placehold = temp;
  // I don't know how to actually extract this since it's within a function
  // If I can't figure it out then I guess the tip calculation would have to be done here
}

// In response to the above comments,
// We can access placehold after calling it, e.g. from an event handler
// Also, we can rewrite "data" above using class methods

// 🍂Create instance of Data object
// and initialize it with input data on submit🍃

// let inputs = new Data();

// function initializeData(e) {
//   inputs.setTotalBill(document.getElementById("totalBill").value);
//   inputs.setNumGuests(document.getElementById("numGuests").value);
//   inputs.setServQual(document.getElementById("servQual").value);
//   console.log(inputs);
// }

// addEventListener("submit", initializeData);
// console.log(document.getElementById("totalBill").value);

// Example which collects the input data after submitting
// let input = new Data();
// console.log("Empty input");
// console.log(input);

// function dataInitialize(dataInstance) {
//   dataInstance.setTotalBill = document.getElementById("totalBill").value;
//   dataInstance.numGuests = document.getElementById("numGuests").value;
//   dataInstance.setTotalBill = document.getElementById("servQual").value;
//   //   console.log(input);
// }

// addEventListener("onSubmit", dataInitialize(input));
// console.log("Filled input");
