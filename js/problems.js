// // 1. [1,2,3,4,5,6] mana shu array ichidagi toq sonlarni kvadratini qaytaring
// // 2. [5,-6,3,4,-9] mana shu arraydi manfiy sonlarni ham musbat qilib qaytaring
// // 3. [] mana shu bo'sh arrayga yuzgacha onlik sonlarni qo'shib qaytaring loop bilan
// // 4. [12, 45, 78, 23, 56, 89, 67] arrayning eng katta elementini toping.
// // 5. ["apple", "banana", "cherry", "date"] arrayni malumotlarini teskari tartibda konsolga chiqaring.
// // 6. k o'zgaruvchisi mana shu arrayda [3, 8, 12, 5, 9] bor yoki yo qligini tekshiruvchi dastur yozing.
// // 7. [2, 4, 6, 8, 10] arrayning har bir elementini kvadratga oshirib qaytaring
// // 8. const car = { brand: "Tesla", model: "Model X" }; Quyidagi car obyektiga year: 2023 xususiyatini qo'shing.
// // 9. const student = {name: "Hasan", courses: ["JavaScript", "React", "Node.js"]};
// // Mana shu student objectni courses hossasi ichidagi har bir kursni consolega chiqaring loop bilan
// // 10. const user = {username: "coder123", password: "12345", email: "coder@example.com"};
// // Quyidagi user obyektidan password xususiyatini o'chiring.

// TASK 1
const numbers = [1, 2, 3, 4, 5, 6];
const squareOddNums = function (numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 !== 0) {
            console.log(`Toq sonlar: ${Math.pow(i, 2)}`);
        }
    }
}
squareOddNums(numbers);



// // TASK 2
// const numbers = [5, -6, 3, 4, -9];
// const convertToPositive = function (numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] < 0) {
//             numbers[i] = Math.abs(numbers[i]);
//         }
//     }
//     return numbers;
// }
// console.log(convertToPositive(numbers));



// // TASK 3
// const numbers = [];
// const addNums = function (numbers) {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 10 === 0) {
//             numbers.push(i);
//         }
//     }
//     return numbers;
// }
// console.log(addNums(numbers));



// // TASK 4
// const numbers = [12, 45, 78, 23, 56, 89, 67];
// const findTheBiggestNum = function (numbers) {
//     let max = numbers[0];
//     for (let i of numbers) {
//         if (i > max) {
//             max = i;
//         }
//     }
//     return max;
// }
// console.log(findTheBiggestNum(numbers));



// // TASK 5
// const fruits = ["apple", "banana", "cherry", "date"];
// const reverseOrder = (fruits) => {
//     let reversedFruits = [];
//     for (let i = fruits.length - 1; i >= 0; i--) {
//         reversedFruits.push(fruits[i]);
//     }
//     return reversedFruits;
// }
// console.log(reverseOrder(fruits));



// // TASK 6
// const numbers = [3, 8, 12, 5, 9];
// const findTheTarget = (k, numbers) => {
//     let found = false;
//     for (let i of numbers) {
//         if (k === i) {
//             found = true;
//         }
//     }
//     if (found === true) {
//         return `K soni mavjud`;
//     } else {
//         return `K soni mavjud emas`;
//     }
// }
// console.log(findTheTarget(1, numbers));



// // TASK 7
// const numbers = [2, 4, 6, 8, 10];
// const toSquare = (numbers) => {
//     for (let i = 0; i < numbers.length; i++) {
//         numbers[i] = Math.pow(numbers[i], 2);
//     }
//     return numbers;
// }
// console.log(toSquare(numbers));



// // TASK 8
// const car = { brand: "Tesla", model: "Model X" };
// function addNewProperty(car) {
//     car.year = 2023;
//     return car;
// }
// console.log(addNewProperty(car));



// // TASK 9.1 with For-Of Loop
// const student = {
//     name: "Hasan",
//     courses: ["JavaScript", "React", "Node.js"]
// };
// function printCourses(student) {
//     let courses = student.courses;
//     for (let i of courses) {
//         console.log(i);
//     }
// }
// printCourses(student);

// // TASK 9.2 with For Loop
// const student = {
//     name: "Hasan",
//     courses: ["JavaScript", "React", "Node.js"]
// };
// function printCourses(student) {
//     let courses = student.courses;
//     for (let i = 0; i < courses.length; i++) {
//         console.log(courses[i]);
//     }
// }
// printCourses(student);



// // TASK 10
// const user = {
//     username: "coder123",
//     password: "12345",
//     email: "coder@example.com"
// };
// const deleteProperty = function (user) {
//     delete user.password;
//     return user;
// }
// console.log(deleteProperty(user));