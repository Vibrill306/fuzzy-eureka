// lecture 10
/*
let firstName = "Jonas";
console.log(firstName);
*/

// let 3years = 3;  // variable names cannot start with number

// lecture 11 : Data types

/*
number
string
boolean
undefined - value taken by the variable that is not yet defined ('empty value')  let childen ;
null - Also means empty value
symbol (ES2015) - value that is unique and cannot be changed
BigInt (ES2020) - larger integers than the number type can hold
*/

/*
true;
console.log(true);

let javaScriptIsFun = true;

console.log(javaScriptIsFun);

console.log(typeof true);

console.log(typeof javaScriptIsFun);

console.log(typeof 23);

console.log(typeof 'saksham');

javaScriptIsFun = "Yes!";

console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);
console.log(typeof null);
*/



// lecture 13 - let, const, var

/*
let age = 30;
age = 31; // reassigning the value (mutate the variable)

const birthYear = 2000;
var job = "programmer";
job = "teacher";

let lastName = "walia";
console.log(lastName);

*/

// lecture 14 - BASIC OPERATORS

/*
// math operators
const now = 2037;
const ageJonas = now - 2000;
const ageSaksham = now - 2018;
console.log(ageJonas, ageSaksham);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2**3 means 2 to the power of 3 = 2*2*2

const firstName = "saksham";
const lastName = "walia";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100

x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSaksham);

const isFullAge = ageSaksham >= 19;
console.log(isFullAge);
*/



// LECTURE 15 - OPERATOR PRECEDENCE

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);



// LECTURE 17 - STRINGS AND TEMPLATE LITERALS

// const firstName = `saksham`;
// const lastName = `walia`;
// const job = `teacher`;
// const birthYear = 2000;
// const currentYear = 2023;

// const saksham = `Hi ! My name is ${firstName} ${lastName},
// I am ${currentYear - birthYear} years old and my current job is ${job}`

// console.log(saksham);



// LECTURE 18 - TAKING DECISIONS : IF/ELSE STATEMENT


/*
const age = 15;

if (age >= 18) {
    console.log(`Sarah can start driving and is applicable for driving licence 🚗🚗`);
}
else {
    const yearsLeft = 18 - age;
    console.log(`Sarah has to wait for another ${yearsLeft} years because she is too young !`);
}


const birthYear = 2012;

let century;
if (birthYear >= 2000) {
    century = 21;
} else {
    century = 20
}
console.log(century);
*/


// LECTURE 20  - TYPE COVERSION AND COERCION

// const inputYear = `2000`;
// const age = 23;

// console.log(Number(inputYear) + age);

// console.log(String(23), 23);
// console.log(typeof NaN);

// let n = "1" + 1;
// n = n - 1;
// console.log(n);


// LECTURE 22 - EQUALITY OPERATORS '==' & '==='

// const favourite = Number(prompt(`Whats your favourite number`));
// console.log(favourite);
// console.log(typeof favourite);

// if(favourite == 23){
//     console.log(`23 is my favourite number!`);
// } else if(favourite === 7){
//     console.log(`7 is also a cool number`);
// } else if(favourite === 9){
//     console.log(`9 is also a cool number`);
// } else{
//     console.log(`number is not 23, 7 or 9`);
// }

// if(favourite !== 23){
//     console.log(`Why not 23 ??`);  
// }

// LECTURE 26 : THE SWTICH STATEMENT

// const day = 'sunday';

// if (day === 'monday') {
//     console.log(`plan course structure`);
//     console.log(`Go to conding meetup`);
// }

// else if (day === 'tuesday') {
//     console.log(`prepare theory videos`);
// }

// else if (day === 'wednesday' || day === 'thursday') {
//     console.log(`write code examples`);
// }

// else if (day === 'friday') {
//     console.log(`record videos`);
// }

// else if (day === 'saturday' || day === 'sunday') {
//     console.log(`Enjoy the weekend`);
// }

// else {
//     console.log(`NOT A VALID DAY`);
// }


// LECTURE 33 - FUNCTIONS

// function foodProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const orangeJuice = foodProcessor(5, 0);
// console.log(orangeJuice);


// LECTURE 34 - FUNCTION DECLARATION AND EXPRESSIONS
// function calcAge1(birthYear) {
//     return 2023 - birthYear;
// }

// const age1 = calcAge1(2000);


// const calcAge2 = function (birthYear) {
//     return 2023 - birthYear;
// }

// const age2 = calcAge2(2000);
// console.log(age1, age2);


// LECTURE 35 - ARROW FUNCTIONS
// const calcAge = birthYear => 2023 - birthYear;
// console.log(calcAge(2000));

// const yearsUntilRetirement = (currentYear, birthYear, retirementAgeInCountry, firstName) => {
//     const age = currentYear - birthYear;
//     const retirementYearsLeft = retirementAgeInCountry - age;
//     return `My name is ${firstName}, My age is ${age} and my retirement years left are ${retirementYearsLeft}`
// }

// console.log(yearsUntilRetirement(2023, 2000, 60, `Saksham Walia`));




// LECTURE 36 - FUNCTIONS CALLING ANOTHER FUNCTIONS

// const cutFruitPieces = function (fruit) {
//     return fruit * 4;
// }

// const fruitProcessor = function (apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// LECTURE 37 - REVIEWING FUNCTIONS

// const calcAge = function (currentYear, birthYear) {
//     return currentYear - birthYear;
// }

// const yearsUntilRetirement = function (currentYear, birthYear, firstName, retirementAgeInCountry) {

//     const age = calcAge(currentYear, birthYear);
//     const retirement = retirementAgeInCountry - age;


//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years.`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired! Congratulations ! 🥂`);
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(2023, 2000, `Saksham`, 60));

// LECTURE 42: INTRODUCTION TO OBJECTS

// const jonas = {
//     firstName: 'saksham',
//     lastName: 'walia',
//     age: 2023 - 2000,
//     friends: ['sudeep', 'sarthak', 'tushar']
// };
// console.log(jonas);

// console.log(jonas.lastName);


// const nameKey = 'Name';
// console.log(jonas['lastName']);
// console.log(jonas['last' + nameKey]);

// jonas.location = 'portugal';
// jonas['instagram'] = '@saksham__ahluwalia';

// console.log(jonas);

// console.log(`${jonas["firstName"]} has ${jonas.friends.length} friends and his best friend name is ${jonas.friends[0]}`);

// const interestedProp = prompt(`Tell me in which name/property/key are you interrested and which key-value to show ?`);
// // console.log(interestedProp);

// if (jonas[interestedProp]) {
//     console.log(jonas[interestedProp]);
// }
// else {
//     console.log(`wrong input ! we accept right property only which is present in object`);
// }

// LECTURE 44 : OBJECTS METHOD

// const jonas = {
//     firstName: 'saksham',
//     lastName: 'walia',
//     birthYear: 2000,
//     job: 'developer',
//     friends: ['sudeep', 'sarthak', 'tushar'],
//     hasDriversLicence: true ,
//     calcAge: function () {
//         this.age = 2023 - this.birthYear;
//         return this.age;
//     }
// }

// console.log(jonas.calcAge());
// console.log(`${jonas.firstName} is a ${jonas['age']} years old ${jonas.job} and ${jonas.hasDriversLicence ? `he has a driver's licence` : `he does not have a driver's licence`}`);


// LECTURE 45 : CODING CHALLENGE - THE OBJECT METHOD
// const markObject = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// }

// const johnObject = {
//     fullname: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// }

// console.log(markObject.calcBMI());

// if (markObject.calcBMI() > johnObject.calcBMI()) {
//     console.log(`${markObject.fullName}'s BMI (${markObject.bmi}) is greater than ${johnObject.fullname}'s BMI (${johnObject.bmi})`);
// }
// else if (johnObject.calcBMI() > markObject.calcBMI()) {
//     console.log(`${johnObject.fullname}'s BMI (${johnObject.bmi}) is greater than ${markObject.fullName}'s BMI (${markObject.bmi})`);
// }
// else {
//     console.log(`Calculation of saksham is incorrect`);
// }

// LECTURE 46 : THE FOR LOOP - PRINCIPLE - DONT REPEAT YOURSELF !

// console.log(`lifting weights repetition 1`);
// console.log(`lifting weights repetition 2`);
// console.log(`lifting weights repetition 3`);
// console.log(`lifting weights repetition 4`);
// console.log(`lifting weights repetition 5`);
// console.log(`lifting weights repetition 6`);
// console.log(`lifting weights repetition 7`);
// console.log(`lifting weights repetition 8`);
// console.log(`lifting weights repetition 9`);

// for loop keeps running until the condition is TRUE
// for (let rep = 1; rep <= 10; rep = rep + 1) {
//     console.log(`lifting weights repetition ${rep} times`);
// }

// const jonasArray = [
//     `saksham`,
//     `walia`,
//     2023 - 2000,
//     `teacher`,
//     [`sudeep`, `sarthak`, `steven`],
//     true
// ];

// const types = [];

// for (let i = 0; i < jonasArray.length; i++) {
// console.log(jonasArray[i], typeof jonasArray[i]);

// types[i] = typeof jonasArray[i];
// types.push(typeof jonasArray[i])
// console.log(types[i]);
// }

// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for (i = 0; i < years.length; i++) {
//     ages.push(2023 - years[i]);
//     console.log(ages);
// }

// for (let i = 0; i < jonasArray.length; i++) {
//     types.push(typeof jonasArray[i])
// }

// CONTINUE AND BREAK
// console.log(`---ONLY STRINGS---`);
// for (let i = 0; i < jonasArray.length; i++) {
//     if (typeof jonasArray[i] !== `string`) continue;
//     // AGAR typeof jonasArray[i] string ke baraabar nhi hai, to bhi continue karo
//     console.log(jonasArray[i], typeof jonasArray[i]);
// }

// console.log(`---BREAK WITH NUBER---`);
// for (let i = 0; i < jonasArray.length; i++) {
//     if (typeof jonasArray[i] === `number`) break;
//     // AGAR typeof jonasArray[i] jaise hi number ke baraabar aayega, vaise hi loop break krdega
//     console.log(jonasArray[i], typeof jonasArray[i]);
// }

// LECTURE 48 - 
// const jonasArray = [
//     `saksham`,
//     `walia`,
//     2023 - 2000,
//     `developer`,
//     [`sudeep`, `sarthak`, `tushar`],
//     true
// ];


// for (let i = jonasArray.length - 1; i >= 0; i--) {
//     console.log(i, jonasArray[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`-----STARTING EXERCISE ${exercise}`);

//     for (let rep = 1; rep <= 6; rep++) {
//         console.log(`Exercise ${exercise} : repetition no. ${rep}`);
//     }
// }


// LECTURE 49 : THE WHILE LOOP
// for (let rep = 0; rep <= 10; rep++) {
//     console.log(`Lifting weights repetion ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`While : Lifting weight competition ${rep}`);
//     rep++;
// }

// lecture 50 : CODING CHALLENGE - VIDEO SOLUTION
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip)
//     totals.push(tip + bills[i]);
// }

// console.log(bills, tips, totals);

// const calcAverage = function (arr) {

//     let sum = 0;
    // let avg = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }

//     let avg = sum / arr.length;
//     return avg;
// }


// console.log(calcAverage([1, 2, 3, 4, 5, 6, 7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));