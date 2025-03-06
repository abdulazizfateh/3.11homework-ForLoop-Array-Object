// // CODEWARS PROBLEMS - 8KYU

// // TASK1
// function digitize(n) {
//     let nStr = String(n);
//     let nArr = [];
//     for (let i = nStr.length - 1; i >= 0; i--) {
//         nArr.push(+(nStr[i]));
//     }
//     return nArr;
// }
// console.log(digitize(12345));

// // TASK1 - BEST PRACTICE USING METHODS
// function digitize(n) {
//     return String(n).split('').map(Number).reverse();
// }
// console.log(digitize(12345));





// // TASK2
// const rps = (p1, p2) => {
//     if ((p1 === "s" && p2 === "p") || (p1 === "r" && p2 === "s") || (p1 === "p" && p2 === "r")) {
//         console.log("Player 1 won!");
//     } else if ((p2 === "s" && p1 === "p") || (p2 === "r" && p1 === "s") || (p2 === "p" && p1 === "r")) {
//         console.log("Player 2 won!");
//     } else {
//         console.log("Draw");
//     }
// };
// rps("s", "s");





// // TASK3 (1234 => )
// const reverseSeq = (n) => {
//     let arr = [];
//     for (let i = n; i >= 1; i--) {
//         arr.push(i);
//     }
//     return arr;
// }
// console.log(reverseSeq(5));





// // TASK4
// function doubleChar(str) {
//     let doubledStr = "";
//     for (let i = 0; i < str.length; i++) {
//         doubledStr += str[i] + str[i];
//     }
//     console.log(doubledStr);
// }
// doubleChar("String");

// // TASK 4 - BEST PRACTICE USING METHODS
// const doubleStr = (str) => str.split("").map(c => c + c).join("");




// // TASK 5
// function sumArray(array) {
//     if (array == null || array.length <= 2) {
//         return 0;
//     } else {
//         let min = array[0];
//         let max = array[0];
//         let sum = 0;
//         for (let i = 0; i < array.length; i++) {
//             if (array[i] > max) {
//                 max = array[i];
//             }
//             if (array[i] < min) {
//                 min = array[i];
//             }
//             sum += array[i];
//         }
//         return (sum - min - max);
//     }
// }
// console.log(sumArray([1, 1, 11, 2, 3]));





// // TASK 6
// function makeUpperCase(str) {
//     return str.toUpperCase();
// }
// console.log(makeUpperCase("abdulazizfateh"));





// // TASK 7
// function greet(name) {
//     return `Hello, ${name} how are you doing today?`;
// }
// greet("Abdulaziz");





// // TASK 8
// function getGrade(s1, s2, s3) {
//     let averageS = (s1 + s2 + s3) / 3;
//     if (averageS >= 90) {
//         return "A";
//     } else if (averageS >= 80 && averageS < 90) {
//         return "B";
//     } else if (averageS >= 70 && averageS < 80) {
//         return "C";
//     } else if (averageS >= 60 && averageS < 70) {
//         return "D";
//     } else if (averageS >= 0 && averageS < 60) {
//         return "F"
//     }
// }
// console.log(getGrade(100, 90, 80));





// // TASK 9
// function findAverage(array) {
//     if (array.length !== 0) {
//         let sum = 0;
//         for (let i of array) {
//             sum += i;
//         }
//         let average = sum / array.length;
//         return average;
//     } else {
//         return 0;
//     }
// }
// console.log(findAverage([1, 4, 7]));





// // TASK 10
// function bmi(weight, height) {
//     let bmi = weight / Math.pow(height, 2)
//     if (bmi <= 18.5) {
//         return "Underweight";
//     } else if (bmi <= 25.0) {
//         return "Normal";
//     } else if (bmi <= 30.0) {
//         return "Overweight";
//     } else {
//         return "Obese";
//     }
// }
// console.log(bmi(100, 1.80));





// // TASK 11
// function hero(bullets, dragons) {
//     if (bullets >= ((dragons) * 2)) {
//         return true;
//     } else {
//         return false;
//     }
// }
// hero();