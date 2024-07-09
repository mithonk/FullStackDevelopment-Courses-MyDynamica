export default class Student {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  display() {
    console.log(`School Student ID : ${this.id}`);
    console.log(`School Stuednt Name : ${this.name}`);
  }
}

export class Teacher {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  displayTeacher() {
    console.log(`Teacher ID : ${this.id}`);
    console.log(`Teacher Name : ${this.name}`);
  }
}
