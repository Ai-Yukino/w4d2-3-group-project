

console.log('test')

class Data {
    constructor(totalBill, numGuests, servQual) {
        this.totalBill = totalBill,
        this.numGuests = numGuests,
        this.servQual = servQual
    }
}
var placehold
function data() {
    totalBill = document.getElementById("totalBill").value,
    numGuests =  document.getElementById("numGuests").value,
    servQual = document.getElementById("servQual").value
    let temp = new Data (totalBill,numGuests,servQual)
    console.log(temp)
    placehold = temp
    // I don't know how to actually extract this since it's within a function
    // If I can't figure it out then I guess the tip calculation would have to be done here
}