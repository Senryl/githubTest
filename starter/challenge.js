//Test Data 1

// const markMass = 78;
// const johnMass = 120;

// const markHeight = 1.69;
// const johnHeight = 1.95;
// // let bodyMassIndex = m/h**2 ;

// // calculate BMI

// const markBMI = markMass/(markHeight*markHeight);
// const johnBMI = johnMass/(johnHeight*johnHeight);

// console.log ("Mark's BMI:", markBMI);
// console.log ("John's BMI:", johnBMI);

// //comparing BMI *

// if (markBMI > johnBMI){
//     console.log(`Mark's BMI (${(markBMI)}) is higher than John's BMI(${(johnBMI)})!`)
//     } else{
//     markBMI< johnBMI;
//     console.log(`Mark's BMI (${(markBMI)})is lower than John's BMI (${(johnBMI)})`)
// };

// //Test Data 2
// let markMass2 = 95;
// let johnMass2 = 85;

// let markHeight2 =1.88;
// let johnHeight2= 1.76;

// //calculate BMI

// let markBMI2 = markMass2/(markHeight2*markHeight2);
// let johnBMI2 = johnMass2/(johnHeight2*johnHeight2);

// console.log("Mark's BMI:", markBMI2);
// console.log("John's BMI", johnBMI2);


// //comparing BMI
// let markHigherBMI2 = markBMI2 > johnBMI2;
// console.log ("is mark's BMI higher than John's ?", markHigherBMI2);

// console.log(typeof markHigherBMI2);

//Data 1 Dolphin VS Koalas
// const dolphins = 96 + 108 + 89;
// console.log(dolphins);

// const koalas = 88 + 91 + 110;
// console.log(koalas);

// if (dolphins>koalas) {
//     console.log ('Dolphins won against Koalas')
// }


// else if ( dolphins<koalas) {
// console.log(`Koalas won against Dolphins`)
// }
// else {
// console.log(`It's a draw !`);
// }


// //Data 2 
// const dolphins = (126+108+89)/3;
// const koalas = (128+91+110)/3;
// const minimum = 100;


// console.log(dolphins);
// console.log(koalas);


// if (dolphins>koalas) {
//     if (dolphins>=minimum) {
//         console.log('Dolphins won against Koalas')
//     } else {
//         console.log("Dolphins didn't reach 100 score")  
//     }
// }
// else if(dolphins===koalas) {
//     if (dolphins>=minimum) {
//         console.log('Dolphins won a draw with Koalas, they both won a trophy!')
//     } else {
//         console.log("Both team didn't reach 100, and didn't win trophies")  
//     }
    
// }

// else {
//     if (koalas>=minimum) {
//         console.log('Koalas won against Dolphins')
//     } else {
//         console.log("Koalas didn't reach 100 score")  
//     }
// }

//write with if else statement wednesday and thursday
// const day = 'thursday';

// switch(day) {
//     case 'monday': // day ==='monday'
//         console.log('Plan course structure');
//         console.log(' go to coding meet up');
//     //break
// const day ='THURSDAY'.toLowerCase()

//     if (day === 'monday') {
//         console.log('Plan course structure');
//         console.log('Go to coding meet up');

//     } else if (day ==='tuesday') {
//         console.log('Prepare theory videos');

//     } else if (day ==='wednesday' || day === 'thursday'){
//         console.log('Write codes examples');
    
//     } else if (day === 'friday') {
//         console.log('Record videos');

//     } else if (day ==='saturday' || day ==='sunday') {
//         console.log('Enjoy the weekend !');

//     } else { 
//         console.log('Not a valid day !');
//     }



// tip 15% for  50 300 
// tip 20% if value different 
//Bill Value attemp 1
// const tip ='275';
// const tipPercent = tip <50 && tip >300 ? 'tip20%' : 'tip15%';
// console.log(tipPercent);
// // Tip Value
//  const billTip = tipPercent == 'tip20%' ? 0.2*tip : 0.15*tip;
//  console.log (billTip);
// //FinalValue
//  finalValue = (tip + billTip);
// console.log(finalValue)


// Attempt 2
// const bill = 430;
// const tip = bill>=50 && bill <=300 ? 0.15*bill: 0.2*bill;
// console.log(`The bill is ${bill}, the tip is ${tip}, and the total value is ${bill + tip}`)

//enoncé ex Bryan a 10000 euros à répartir dans différentes dépenses et investissements 
// sa stratégie est de mettre 40% en investissements, 10% en épargne, 25% en charges, 25% en plaisirs
// en sachant qu'il se paye en premmier(10%) puis paye les impots(33%) et avec le reste, il établit sa stratégie.
// faire un programme qui permet selon son entrée d'argent de répartir comme écris ci-dessus.

//income by month
// const income= 5000;
// console.log(income)
// // I am paying myself 10% of the earnings
// const selfPaid = 0.10 * income;
// console.log(`-Paying myself -> Revolut : ${selfPaid} €`);


// // const taxRate = calculateTax(income);
// const taxAmount = income * taxRate;


// //definition of calculate tax and function  not good syntax
// // function + if/else  gives a result, i want to use the result for others const
// // I create a function where I can calculate Income * taxes in % to give to the government

// function calculateTax(income){

//     // *12  for a 12months= 1 year of income 
// if (income*12 <=11294) 

// {return console.log(`- Not paying the taxes, ${taxes} € for my BoursoBank ` )

// } else if (income*12 <= 28797 && income*12 >=11295) {income*0.11 
//     return (income*0.11)

// } else if (income*12 >= 29798 && income*12<=82341) { income*0.3
//     return (income*0.3)

// } else if (income*12 >= 82342 && income*12<=177106) { income * 0.41
//     return (income*0.41)

// }else if (income*12 >= 177106) { income * 0.45
//     return (income 0.45)
// }}
// const taxRate = calculateTax(income);

// console.log(taxRate);
const investExpanses = (income - (taxeRate + selfPaid));
console.log(`After taxes and self Paid ${investExpanses} €: `);
console.log()
const investments = 0.40 *investExpanses ;
console.log (`- On cryptocurrencies and assets and trading : ${investments} € `)

const safe = 0.10 * investExpanses;
const charges = 0.25 *investExpanses;
const pleasures = 0.25 *investExpanses;
console.log (`- In case  for sudden expanses : ${safe}€`);
console.log (`- Food, Rent, Elecrticity, Water : ${charges}€ `);
console.log (`- Wanna eat outside ? Here is :  ${pleasures}€`);
