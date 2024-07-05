// console.log('Test');

/*
class Person {
  id = 1000;
  name = 'Mithursan';
}

class Student extends Person {
  //   id = 1000;
  //   name = 'Mithursan';

  setMarks(marks1, marks2, marks3) {
    this.marks1 = marks1;
    this.marks2 = marks2;
    this.marks3 = marks3;
  }

  display() {
    console.log(`Student Name : ${this.name}`);
  }
}

class Employee extends Person {
  //   id = 1000;
  //   name = 'John';

  setBasicSalary(basicSalary) {
    this.basicSalary = basicSalary;
  }

  display() {
    console.log(`Employee Name : ${this.name}`);
  }
}

let student1 = new Student();
student1.display();
console.log(student1.id);
console.log(student1.name);
student1.id = 2000;
console.log(student1.id);

let employee1 = new Employee();
employee1.display();
console.log(employee1.id);
console.log(employee1.name);
console.log(employee1.id);
*/

/*
class Person {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class Student extends Person {
  constructor(id, name) {
    super(id, name);
  }

  setMarks(marks1, marks2, marks3) {
    this.marks1 = marks1;
    this.marks2 = marks2;
    this.marks3 = marks3;
  }

  display() {
    console.log(`Student Name : ${this.name}`);
  }
}

class Employee extends Person {
  constructor(id, name) {
    super(id, name);
  }

  setBasicSalary(basicSalary) {
    this.basicSalary = basicSalary;
  }

  display() {
    console.log(`Employee Name : ${this.name}`);
  }
}

let student1 = new Student(1001, 'John');
student1.display();
console.log(student1.id);

let employee1 = new Employee(1002, 'Wick');
employee1.display();
console.log(employee1.id);
*/

class Person {
  id = 1001;
  name = 'Leo';
}

class Student extends Person {
  constructor(id, name) {
    super();
    this.id = id;
    this.name = name;
  }

  setMarks(marks1, marks2, marks3) {
    this.marks1 = marks1;
    this.marks2 = marks2;
    this.marks3 = marks3;
  }

  display() {
    console.log(`Student ID : ${this.id}`);
    console.log(`Student Name : ${this.name}`);
  }
}

class Employee extends Person {
  constructor(id, name) {
    super();
    this.id = id;
    this.name = name;
  }

  setBasicSalary(basicSalary) {
    this.basicSalary = basicSalary;
  }

  display() {
    console.log(`Employee ID : ${this.id}`);
    console.log(`Employee Name : ${this.name}`);
  }
}

let student1 = new Student(1001, 'John');
student1.display();

let employee1 = new Employee(1002, 'Wick');
employee1.display();
