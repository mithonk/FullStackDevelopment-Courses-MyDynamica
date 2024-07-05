// console.log('Test');

/*
function Student(fname, lname) {
  this.fname = fname;
  this.lname = lname;
}

let student1 = new Student('Tamil', 'Nila');

console.log(student1);
*/

/*
class Student {
  fname = 'Tamil';
  lname = 'Nila';
}

let student1 = new Student();

console.log(student1);
*/

/*
class Student {
  constructor(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
  }

  getFullName() {
    console.log(`Your FUllname is ${this.firstName} ${this.lastName}`);
  }
}

let student1 = new Student('Raja', 'Rani');
let student2 = new Student('Ven', 'Nila');
let student3 = new Student('Tamil', 'Nila');
*/
/*
console.log(student1);
console.log(student2);
console.log(student3);

student1.getFullName();
student2.getFullName();
student3.getFullName();
*/

/*
student1.display = function () {
  console.log(`Your Fullname is ${this.firstName} ${this.lastName}`);
};

student1.display();
*/

/*
student1.display = () => {
  console.log(`Your Fullname is ${this.firstName} ${this.lastName}`);
};

student1.display();
*/

class Student {
  static NoOfStudent = 0;

  constructor(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
    Student.NoOfStudent += 1;
  }

  getFullName() {
    // let x = 10;
    console.log(`Your Fullname is ${this.firstName} ${this.lastName}`);
    // console.log(x);
  }

  static display() {
    console.log(`Test`);
    //console.log(x)
  }
}

let student1 = new Student('Tamil', 'Nila');
let student2 = new Student('Tamil', 'Aruvi');
let student3 = new Student('Tamil', 'Mozhi');
let student4 = new Student('Tamil', 'Kami');

// console.log(Student.NoOfStudent);
// student3.display();
// student1.getFullName();
// student1.display();
Student.display();
