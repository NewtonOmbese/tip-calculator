let billAmount = document.getElementById("bill");
let tipPercentage = document.getElementById("percentTip");
let tipAmount = document.getElementById("tipAmount");
let totalAmount = document.getElementById("total");
let calculateAmount = document.getElementById("compute");
// let amountingTip;
// let amountingTotal;


calculateAmount.addEventListener('click', ()=>{
    let bills = billAmount.value;
    let percentagingTip = tipPercentage.value;
    tipAmount.value = (bills * percentagingTip) / 100;
    // console.log(amountingTip)
    // tipAmount.value = amountingTip
    totalAmount.value = parseInt(bills) + parseInt(tipAmount.value)
    // console.log(amountingTotal)
    // totalAmount.value = amountingTotal
})

