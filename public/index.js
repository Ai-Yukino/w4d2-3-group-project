

class Data {
    constructor(totalBill, numGuests, servQual) {
        this.totalBill = totalBill,
        this.numGuests = numGuests,
        this.servQual = servQual
    }
}

let tipData = Data(document.getElementById("totalBill"), document.getElementById("numGuests"), document.getElementById("ServQual"))

console.log(tipData)