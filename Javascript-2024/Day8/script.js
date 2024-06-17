/*
function myName() {
  console.log('My Name is Mithursan Kalanantharasan');
}

myName();
*/

/*
let myName1 = function () {
  console.log('My Name is Mithursan');
};
myName1();

console.log(typeof myName1);
*/

/*
let myName = () => console.log('My Name is Mithursan');
myName();
console.log(typeof myName);
*/

/*
function sum(a, b) {
  return a + b;
}

let output = sum(11, 3);
console.log(output);
*/

/*
let sum = function (a, b) {
  return a + b;
};

let output = sum(3, 4);
console.log(output);
*/

/*
let sum = (a, b) => a+b;

let output = sum(2, 3);
console.log(output);
*/

/*
let sum = (a, b) => {
  return a + b;
};

let output = sum(2, 3);
console.log(output);
*/

/*
function fullName1(fname, lname) {
  let fullName = `Your Fullname is ${fname} ${lname}`;
  return fullName;
}
console.log(fullName1('Leo', 'Das'));

let fullName2 = function (fname, lname) {
  let fullName = `Your Fullname is ${fname} ${lname}`;
  return fullName;
};
console.log(fullName2('Arul', 'Das'));

let fullName3 = (fname, lname) => {
  let fullName = `Your Fullname is ${fname} ${lname}`;
  return fullName;
};
console.log(fullName3('Valar', 'Das'));
*/

/*
let fullName = (fname, lname) => `Your Fullname is ${fname} ${lname}`;
console.log(fullName('Jeeva', 'Das'));
*/

/*
function hello1(name) {
  console.log(`Hello, ${name}`);
}
hello1('Kevin');

let hello2 = function (name) {
  console.log(`Hello, ${name}`);
};
hello2('Das');

let hello3 = (name) => console.log(`Hello, ${name}`);
hello3('John');

let hello4 = name => console.log(`Hello, ${name}`);
hello4('Maharaja');
*/

//IIFE

/*
(function () {
  console.log('IIFE');
})();

(function (name) {
  console.log(`Your Name is ${name}`);
})('Mithursan');

(function (fname, lname) {
  console.log(`Your Fullname is ${fname} ${lname}`);
})('Mithursan', 'Kalanantharasan');
*/

/*
((name) => console.log(`Hello, ${name}`))('Mitho');

((fname, lname) => console.log(`Your Fullname is ${fname} ${lname}`))(
  'John',
  'Wick'
);
*/

/*
function sayHi(name) {
  //console.log(name);
  name = typeof name !== 'undefined' ? name : 'Give a Name';
  console.log(name);
}

sayHi();
sayHi('Árul');
*/

function sayHi(name = 'Elon Musk') {
  console.log(name);
}

sayHi();
sayHi('RJ Balaji');
sayHi();
