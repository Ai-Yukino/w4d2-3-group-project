console.log("test");

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
