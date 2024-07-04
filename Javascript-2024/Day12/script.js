// console.log('Test');
/*
function Student(fname, lname) {
  this.fname = fname;
  this.lname = lname;

  this.getName = () => {
    console.log(`Your Fullname is ${this.fname} ${this.lname}`);
  };
}

let student1 = new Student('Raja', 'Rani');

console.log(student1);
*/
/*
let student2 = new Student('John', 'Wick');
let student3 = new Student('Kabil', 'Dev');

console.log(student1);
console.log(student2);
console.log(student3);

student1.getName();
student2.getName();
student3.getName();
*/

/*
student1.display = function () {
  console.log(`Your Fullname is ${this.fname} ${this.lname}`);
};

student1.display();
*/

/*
student1.display = () => {
  console.log(`Your Fullname is ${this.fname} ${this.lname}`);
};

student1.display();
*/

function Student(fname, lname) {
  if (!new.target) {
    return new Student(fname, lname);
  }
  this.fname = fname;
  this.lname = lname;

  this.getName = () => {
    console.log(`Your Fullname is ${this.fname} ${this.lname}`);
  };
}

let student1 = Student('Raja', 'Rani');

console.log(student1);
student1.getName();
