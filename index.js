#! /usr/bin/env node 
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.75,
    INR: 74.57,
    PKR: 280,
};
let user_Ans = await inquirer.prompt([
    {
        name: "from",
        message: "enter from currency",
        type: "list",
        choices: [`USD`, `EUR`, `GBP`, `INR`, `PKR`]
    },
    {
        name: "to",
        message: "enter to currency",
        type: "list",
        choices: [`USD`, `EUR`, `GBP`, `INR`, `PKR`]
    },
    {
        name: "amount",
        type: "number",
        message: "enter your amount",
    }
]);
let fromAmount = currency[user_Ans.from];
let toAmount = currency[user_Ans.to];
let amount = user_Ans.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
