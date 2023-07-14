// remember, we are gonna use strict mode in all scripts now !
'use strict';

// const x = 23;
// if (x === 23) console.log(`Beautiful`);

// const calcAge = (birthYear) => 2037 - birthYear;
// console.log(calcAge(2000));

// LECTURE 59 : FIND TEMPERATURE AMPLITUDE - PRACTICE QUESTION

// const temperatures = [3, -2, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = (temps) => {

//     let max = temps[0];
//     let min = temps[0];

//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if (typeof curTemp !== `number`) continue;

//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }

//     console.log(min, max);
//     return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// const calcTempAmplitude = (t1, t2) => {

//     // concatinating 2 arrays
//     const temps = t1.concat(t2);
//     console.log(`Concatinated array is ${temps}`);

//     //  max and min variables initially at 0 place in array
//     let max = temps[0];
//     let min = temps[0];

//     // iterating array through for loop
//     for (let i = 0; i < temps.length; i++) {

//         const curTemp = temps[i];
//         if (typeof curTemp !== `number`) continue;
//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }

//     // displaying max and min temperatures after calculating
//     console.log(max, min);

//     // returning mplitude ( max temperature - min temperature)
//     return max - min;
// };

// const amplitude = calcTempAmplitude([3, 5, 1], [9, 0, 1]);
// console.log(amplitude);

// LECTURE 61 : DEBUGGING WITH THE CONSOLE AND BREAKPOINTS

// const measureKelvin = function () {
//     const measurement = {
//         type: `temp`,
//         unit: `celcius`,

//         // C. FIX
//         value: Number(prompt(`Enter the value in degree celcius`)) // PROMPT ALWAYS GIVE VALUE IN "STRING"
//     };

//     // B. FIND
//     console.log(measurement.value);

//     // console.warn(measurement.value); // FOR GENERATING WARNING
//     // console.error(measurement.value); // FOR GENERATING ERROR

//     console.table(measurement); // WE CAN USE CONSOLE.TABLE FOR OBJECTS TO SHOW IN TABLE FORMAT WITH "TYPEOF(BY DEFAULT)"

//     const kelvin = measurement.value + 273;
//     return kelvin;
// }

// // A. IDENTIFY
// console.log(`The value is ${measureKelvin()}`);

// USING A DEBUGGER

// const calcTempAmplitudeBug = (t1, t2) => {

//     const temp = t1.concat(t2);
//     console.log(temp);

//     let max = 0;
//     let min = 0;
//     for (let i = 0; i < temp.length; i++) {
//         const curTemp = temp[i];

//         if (typeof curTemp !== `number`) continue;

//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     console.log(`MAXIMUM temperature is ${max}`);
//     console.log(`MINIMUM temperature is ${min}`);

//     // debugger;
//     return max - min;

// };

// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// console.log(amplitudeBug);


// LECTURE 72 : SELECTING AND MANIPULATING ELEMENTS :

// console.log(document.querySelector(`.message`));;
// console.log(document.querySelector(`.message`).textContent);;
// document.querySelector(`.message`).textContent = `Saksham Walia ☘`;
// console.log(document.querySelector(`.message`).textContent);

// console.log(document.querySelector(`.number`));
// document.querySelector(`.number`).textContent = 23;

// console.log(document.querySelector(`.score`).textContent);;
// document.querySelector(`.score`).textContent = 49;
// console.log(document.querySelector(`.score`).textContent);

// document.querySelector(`.guess`).value = 32;
// console.log(document.querySelector(`.guess`).value);


// LECTURE 73 : HANDLING CLICK EVENTS
// document.querySelector(`.check`).addEventListener(`click`, function () {

//     const newNumber = document.querySelector(`.number`).textContent = `This is the new number`;
//     console.log(newNumber);

//     const guess = Number(document.querySelector(`.guess`).value);
//     console.log(guess, typeof guess);

//     if (!guess) {
//         document.querySelector(`.message`).textContent = `NO NUMBER IN INPUT`;
//     }

// });




