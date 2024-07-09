class Student {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  display() {
    console.log(`Student ID : ${this.id}`);
    console.log(`Stuednt Name : ${this.name}`);
  }
}

export { Student };
