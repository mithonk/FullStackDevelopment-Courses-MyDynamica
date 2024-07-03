// console.log('Test');
/*
let student1 = {
  fname: 'Leo',
  lname: 'Das',
  age: 42,
};

console.log(student1);

function fullName() {
  console.log(`This is My Fullname`);
}

student1.fuNa = fullName;

console.log(student1);

student1.fuNa();
*/

/*
let student1 = {
  fname: 'Tamil',
  lname: 'Nila',
  age: '18',
};

student1.fullName = function () {
  console.log(`This is my fullname`);
};

student1.fullName();
*/

/*
let student1 = {
  fname: 'John',
  lname: 'Wick',
  age: 31,
};

let fullName = () => {
  console.log('This is my fullname');
};

student1.fuNA = fullName;

student1.fuNA();
*/

/*
let student1 = {
  fname: 'John',
  lname: 'Wick',
  age: 26,
  fullName: function () {
    console.log('This is my fullname');
  },
};

student1.fullName();
console.log(student1);
*/

/*
let student1 = {
  fname: 'Then',
  lname: 'Nila',
  age: 21,
  fullName: () => {
    console.log('This is my fullname');
  },
};

console.log(student1);
console.log(student1.fname);
student1.fullName();
*/
/*
let student1 = {
  fname: 'Varan',
  lname: 'Dhev',
  age: 25,
  fullName() {
    console.log('This is my fullname');
  },
};

console.log(student1);
student1.fullName();
*/

let student1 = {
  fname: 'Leo',
  lname: 'Das',
  age: 24,
  fullName: function () {
    console.log(`My Fullname is ${this.fname} ${this.lname}`);
  },
};

student1.fullName();
