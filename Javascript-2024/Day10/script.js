// console.log('Test');

// let obj = {
//   firstName: 'Mithursan',
//   lastName: 'Kalanantharasan',
//   age: 26,
// };

// console.log(obj);
// console.log(obj.firstName);

// obj.gender = 'Male';

// console.log(obj);

// delete obj.age;
// console.log(obj);

// obj.firstName = 'Yathursan';
// console.log(obj);

// console.log('age' in obj);
// console.log('firstName' in obj);

// for (let key in obj) {
//   console.log(key);
// }

// for (let key in obj) {
//   console.log(`${key} ${obj[key]}`);
// }

// console.log(obj.firstName);
// console.log(obj['firstName']);

// let obj = {
//   'First Name': 'Mithursan',
//   lastName: 'Kalanantharasan',
//   age: 26,
// };

// //   console.log(obj.First Name);
// console.log(obj['First Name']);

// let key = prompt('Enter Your Details');
// let value = prompt('Enter Your First Name');

// let student = {
//   [key]: value,
// };

// // console.log(student[key]);
// console.log(student[key]);

// let key = prompt('Enter Your Deatails');
// let value = prompt('Enter Your First Name');

// let student = {};

// student[key] = value;

// //ddconsole.log(student[key]);
// console.log(student);

// function createStudent() {
//   return {
//     firstName: 'Mithursan',
//     lastName: 'Kalanantharasan',
//     age: 25,
//   };
// }

// let student1 = createStudent();

// console.log(student1);

/*
function createStudent(firstName, lastName, age) {
  return {
    firstName: firstName,
    lastName: lastName,
    age: age,
  };
}

let student1 = createStudent('Tamil', 'Nila', 20);
let student2 = createStudent('Kevin', 'Das', 30);
let student3 = createStudent('John', 'wick', 42);

console.log(student1);
console.log(student2);
console.log(student3);
*/

/*
function createStudent(firstName, lastName, age) {
  return {
    firstName,
    lastName,
    age,
  };
}

let student1 = createStudent('JK', 'Dreams', 25);
let student2 = createStudent('Varan', 'Das', 65);

console.log(student1);
console.log(student2);
*/

function createEmployee(id, name, salary) {
  let obj = {
    id,
    name,
    salary,
  };

  return obj;
}

let employee1 = createEmployee(1001, 'Arul', 25000.0);
let employee2 = createEmployee(1002, 'Das', 30000.0);

console.log(employee1);
console.log(employee2);
