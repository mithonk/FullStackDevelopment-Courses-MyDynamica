// console.log('Test');

/*
let subject1 = ['Maths', 'Tamil'];
let subject2 = ['English', 'IT'];

// console.log(subject1);
// console.log(subject2);

console.log(...subject1);
console.log(...subject2);

// let subjects = subject1 + subject2;
// let subjects = subject1.concat(subject2);
let subjects = [...subject1, ...subject2];
console.log(subjects);
*/

/*
let name = 'Mithursan';

console.log(...name);
console.log([...name]);
*/

/*
let Student = {
  fname: 'Mithursan',
  lname: 'Kalanantharasan',
  age: 25,
};

let Marks = {
  Maths: 85,
  English: 75,
  Tamil: 55,
};

let StudentMarks = {
  ...Student,
  ...Marks,
};

console.log(StudentMarks);
*/

//Rest Parameter

// let numbers = [10, 15, 45, 58];

/*
function sum(...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  console.log(total);
}

// sum(numbers);
// sum(25, 50, 25);

let Marks = [10, 20, 30];
//Spread Operator
sum(...Marks);
*/

console.log('Mitho', 'NK', 55, 48, 'Mithursan');

let data = ['Mitho', 'NK', 55, 48, 'Mithursan'];
console.log(...data);
