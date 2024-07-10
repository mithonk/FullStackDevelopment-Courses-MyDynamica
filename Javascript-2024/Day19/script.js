// console.log('Test');
//Array Destructuring
/*
let arr = ['Maths', 'English', 'IT'];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

let subject1 = arr[0];
let subject2 = arr[1];
let subject3 = arr[2];

console.log(subject1);
console.log(subject2);
console.log(subject3);
*/

/*
let arr = ['Maths', 'English', 'IT'];

let [subject1, subject2, subject3] = arr;

console.log(subject1);
console.log(subject2);
console.log(subject3);
*/
/*
let arr = ['Maths', 'English', 'IT'];

let [subject1] = arr;

console.log(subject1);
*/
/*
let arr = ['Maths', 'English', 'IT'];

let [, , subject1] = arr;

console.log(subject1);
*/
/*
let arr = ['Maths', 'English', 'IT'];

let [subject1, , subject2] = arr;

console.log(subject1);
console.log(subject2);
*/

/*
// let arr = [undefined, 'English', 'IT', 'Tamil'];
let arr = ['Maths', 'English', 'IT', 'Tamil'];

let [subject1 = 'deafault maths', , ...subject2] = arr;

console.log(subject1);
console.log(subject2);
*/
/*
let arr = ['Maths', 'English', 'IT', 'Tamil'];

let subject1, subject2, subject3;
[subject1, subject2, subject3] = arr;
console.log(subject1);
console.log(subject2);
console.log(subject3);
*/

//Object Destructuring

/*
let Student = {
  name: 'Mithursan',
  age: 25,
  address: 'Jaffna',
};

console.log(Student);
console.log(Student.name);
console.log(Student.age);
console.log(Student.address);

let { name, age, address } = Student;

console.log(name);
console.log(age);
console.log(address);
*/

let Student = {
  name: 'Mithursan',
  age: 25,
  address: 'Jaffna',
};

let { names, age, address } = Student;

console.log(names);
console.log(age);
console.log(address);
