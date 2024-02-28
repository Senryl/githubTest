//Prompt your income
let input;
let validInput = false;

let income = prompt("Please enter your income");

console.log(`Here is what I am earning this month :${income}€  `);
// I am paying myself 10% of the earnings
const selfPaid = 0.10 * income;
console.log(`-Paying myself -> Revolut : ${selfPaid} €`);

// Define the function to calculate tax
function calculateTax(income) {
    if (income * 12 <= 11294) {
        console.log(`- Not paying taxes, ${income} € for my BoursoBank`);
        return 0; // No tax
    } else if (income * 12 <= 28797) {console.log (`-Paying the Government, ${income*0.11}€ to IBAN...`)

        return income * 0.11; // 11% tax
    } else if (income * 12 <= 82341) {console.log (`-Paying the Government, ${income*0.3}€ to IBAN...`)
        return income * 0.3; // 30% tax
    } else if (income * 12 <= 177106) {console.log (`-Paying the Government, ${income*0.41}€ to IBAN...`)
        return income * 0.41; // 41% tax
    } else {console.log (`-Paying the Government, ${income*0.45}€ to IBAN...`)
        return income * 0.45; // 45% tax
    }
}

const taxRate = calculateTax(income); // Calculate tax
console.log(`Tax %: ${taxRate/income*100}%`) // Tax in % 

console.log(`Tax Amount: ${taxRate} €`); // Tax Amount

// Investments and Expanses 

const investExpanses = (income - (taxRate + selfPaid)); // income/ month - Tax amount+ self paid 
console.log(`After taxes and self Paid ${investExpanses} €: `);// Investing and expenses

const investments = 0.40 *investExpanses ; // cryptocurrencies and Trading and assets
console.log (`- On cryptocurrencies and assets and trading : ${investments} € `)

const safe = 0.10 * investExpanses; // rainy days
const charges = 0.25 *investExpanses; // rent, Food, 
const pleasures = 0.25 *investExpanses; // trips, eat outside
console.log (`- In case  for sudden expanses : ${safe}€`);
console.log (`- Food, Rent, Elecrticity, Water : ${charges}€ `);
console.log (`- Wanna eat outside ? Here is :  ${pleasures}€`);
