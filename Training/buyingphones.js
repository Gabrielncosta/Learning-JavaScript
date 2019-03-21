const IMPOSTO = 0.20;
const PHONE = 99.99;
const ACESSORY = 9.99;
const SPENDING_THRESHOLD = 200;

var bank_balance = prompt("What's your bank balance?"); // user can choise his bank balance
var amount = 0;

function tax(amount) // add tax to the amount value
{
    return amount * IMPOSTO;
}

function round(amount) // formates the price
{
    return "R$" + amount.toFixed(2);
}

// a loop for buying as many phones as you can
while(amount < bank_balance)
{
    amount += PHONE;

    if(amount < SPENDING_THRESHOLD)
    {
        amount += ACESSORY;
    }
}

amount = amount + tax(amount);

console.log("Your purchase: " + round(amount)); // final value
