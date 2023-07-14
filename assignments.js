// LECTURE - lecture 10 - values and variables


/*
let country = "India";
let continent = "Asia";
let population = "1450000000";
console.log(country, continent, population);
*/


// CODING CHALLENGE - LECTURE 16

// test case 1 

// let markHeight = 1.69;
// let markWeight = 78;

// let johnHeight = 1.95;
// let johnWeight = 92;

// test case 2
// markHeight = 1.88;
// markWeight = 95;

// johnHeight = 1.76;
// johnWeight = 85;

// let markBMI = markWeight / (markHeight * markHeight);

// console.log(markBMI);

// let johnBMI = johnWeight / (johnHeight * johnHeight);

// console.log(johnBMI);

// let markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);



// CODING CHALLENGE - LECTURE 19
// let markHeight = 1.69;
// let markWeight = 78;

// let johnHeight = 1.95;
// let johnWeight = 92;

// let markBMI = markWeight / (markHeight ** 2);
// console.log(`Mark's BMI is ${markBMI}`);

// let johnBMI = johnWeight / (johnHeight ** 2);
// console.log(`John's BMI is ${johnBMI}`);

// if(markBMI > johnBMI){
//     console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
// } else{
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
// }


// LECTURE 25 : CODING CHALLENGE 3#
// const dolphinsScore1 = 97;
// const dolphinsScore2 = 112;
// const dolphinsScore3 = 101;

// const koalasScore1 = 109;
// const koalasScore2 = 95;
// const koalasScore3 = 106;

// const dolphinsAvgScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
// console.log(`Dolphins Average score is ${dolphinsAvgScore}`);

// const koalasAvgScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
// console.log(`Koalas Average score is ${koalasAvgScore}`);

// const teamDraw = dolphinsAvgScore == koalasAvgScore;
// console.log(teamDraw);

// if ((teamDraw) && (teamDraw >= 100)) {
//     console.log(`Match is draw`);
// }

// else if ((dolphinsAvgScore > koalasAvgScore) && (dolphinsAvgScore >= 100)) {
//     console.log(`Dolphins Team win`);
// }

// else if ((koalasAvgScore > dolphinsAvgScore) && (koalasAvgScore >= 100)) {
//     console.log(`Koalas Team Win`);
// }

// else {
//     console.log(`Both average team scores are less than 100`);
// } 


// LECTURE 29 : THE TERNARY OPERATOR

// const bill = 430;
// const tip = (bill >= 50 && bill <= 300) ? (15 / 100) * bill : (20 / 100) * bill;
// // console.log(tip);

// console.log(`The bill was ${bill} and the tip was ${tip} - and the total value ${bill + tip}`);



// LECTURE 38 - CODING CHALLENGE FOR FUNCTIONS

// const calcAverage = (teamScore1, teamScore2, teamScore3) => (teamScore1 + teamScore2 + teamScore3) / 3;


// const dolphinsAvgScore = calcAverage(44, 23, 71);
// console.log(dolphinsAvgScore);

// const KoalasAvgScore = calcAverage(65, 54, 49);
// console.log(KoalasAvgScore);

// const checkWinner = (dolphinsAvgScore, KoalasAvgScore) => {
//     if (dolphinsAvgScore >= 2 * KoalasAvgScore) {
//         return `Dolphins Wins (${dolphinsAvgScore} vs ${2 * KoalasAvgScore})`;
//     }
//     else if (KoalasAvgScore >= 2 * dolphinsAvgScore) {
//         return `Koalas Wins (${KoalasAvgScore} vs ${2 * dolphinsAvgScore})`
//     }
//     else {
//         return `No team wins because there average scores are not double of each other`;
//     }
// }

// const winningTeam = checkWinner(576, 111);
// console.log(winningTeam);


// LECTURE 41

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }


// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(bills, tips, totals);



// LECTURE 62 : CODING CHALLENGE (DEBUGGER)


// RULE NO 1. - UNDERSTAND THE PROBLEM 
//     -- ARRAY TRANSFORMED TO STRING SEPARATED BY "..."
//     -- WHAT IS THE X DAYS ? (index + 1)

// RULE NO. 1 - BREAKING INTO SUB-PROBLEMS
//      -- TRANSFORM ARRAY INTO STRING
//      -- TRANSFORM EACH ELEMENT TO STRING WITH DEGREE CELCIUS
//      -- STRING NEED TO CONTAIN DAY (index + 1)
//      -- ADD "..." BETWEEN ELEMENTS AND START AND END OF STRING

// const array1 = [17, 21, 23];
// const array2 = [19, 24, 2, 3, 4, 5, 1, 238, 23, 45, 45, 12, 1, 5, 56, 5, 5, 3, 4, 23, 35, 3, 53, 5, 65, 6, 345, 23, 24, 34, 3546, 5, 64, 63, 4, 23,];

// const printForcast = function (arr) {

//     let str = '';
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(`... ${arr[i]} degree celcius in ${i + 1} days`);
//         str += `...${arr[i]} degree celcius in ${i + 1} days  `
//     }

//     return str;
// };

// console.log(printForcast(array1));
// console.log(printForcast(array2));