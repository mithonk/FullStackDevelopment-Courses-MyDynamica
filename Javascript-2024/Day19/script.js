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

/*
let Student = {
  name: 'Mithursan',
  age: 25,
  address: 'Jaffna',
};

let { names = 'Default', age, address } = Student;

console.log(names);
console.log(age);
console.log(address);
*/

/*
let Student = {
  name: {
    fname: 'Mithursan',
    lname: 'Kalanantharasan',
  },
  age: 25,
  address: 'Jaffna',
};

// console.log(Student);
// console.log(Student.name.fname);
// console.log(Student.name.lname);
let {
  name: { fname, lname },
  age,
  address,
} = Student;

// console.log(name);
console.log(fname);
console.log(lname);
console.log(age);
console.log(address);
*/

/*
let Student = {
  name: {
    fname: 'Mithursan',
    lname: 'Kalanantharasan',
  },
  age: 25,
  address: 'Jaffna',
};

// console.log(Student);
// console.log(Student.name.fname);
// console.log(Student.name.lname);
let {
  name: { fname, lname },
  age: a,
  address: add,
} = Student;

// console.log(name);
console.log(fname);
console.log(lname);
// console.log(age);
console.log(a);
// console.log(address);
console.log(add);
*/
/*
let Student = {
  name: {
    fname: 'Mithursan',
    lname: 'Kalanantharasan',
  },
  address: 'Jaffna',
};

let {
  name: { fname, lname },
  age: a = 50,
  address: add,
} = Student;

console.log(fname);
console.log(lname);
console.log(a);
console.log(add);
*/

/*
let Student = {
  name: {
    fname: 'Mithursan',
    lname: 'Kalanantharasan',
  },
  age: 25,
  address: 'Jaffna',
};

let {
  name: { fname, lname },
  ...rest
} = Student;

console.log(fname);
console.log(lname);
// console.log(a);
// console.log(add);

console.log(rest);
console.log(rest.age);
console.log(rest.address);
*/

/*
let Student = {
  fname: 'Leo',
  lname: 'Das',
  age: 25,
};

function display(stu) {
  console.log(`Student Fullname : ${stu.fname} ${stu.lname}`);
  console.log(`Student Age : ${stu.age}`);
}

display(Student);
*/

/*
let Student = {
  fname: 'Leo',
  lname: 'Das',
  age: 25,
};

function display({ fname, lname, age }) {
  console.log(`Student Fullname : ${fname} ${lname}`);
  console.log(`Student Age : ${age}`);
}

display(Student);
*/

/*
function calc(a, b) {
  let sum = a + b;
  let sub = a - b;
  let mul = a * b;
  let div = a / b;

  return [sum, sub, mul, div];
}

let [sum, sub, mul, div] = calc(100, 75);

console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);
*/
/*
function calc(a, b) {
  let sum = a + b;
  let sub = a - b;
  let mul = a * b;
  let div = a / b;

  return { sum, sub, mul, div };
}

let { sum, sub, mul, div } = calc(100, 75);

console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);
*/
/*
let Student = {
  fname: 'Mithursan',
  age: 25,
};

let fname, age;
({ fname, age } = Student);

console.log(fname);
console.log(age);
*/

let Student = {
  fname: 'Mithursan',
  age: 25,
  getFullName: () => {
    console.log(`This is My Fullname`);
  },
};

let { fname, age, getFullName } = Student;

getFullName();
