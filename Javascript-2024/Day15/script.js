// console.log('Test');

/*
class Student {
  SetfName(fname) {
    this.fname = fname;
  }
  getfName() {
    console.log(this.fname);
  }
}

let student1 = new Student();
student1.SetfName('Mithursan');
student1.getfName();
*/

/*
class Student {
  #_fname = 'Yathursan';

  set fName(fname) {
    this.#_fname = 'Hi, ' + fname;
  }
  get fName() {
    return 'My Name is : ' + this.#_fname;
  }
}

let student1 = new Student();
// student1.fName = 'Mithursan';
// student1.fName = 'Kabil';
// student1._fname = 'John';
console.log(student1.fName);
*/
/*
class Student {
  #_fName = 'Mitho';
  #_lName = 'NK';

  set fName(fname) {
    this.#_fName = fname;
  }

  get fName() {
    return this.#_fName;
  }

  set lName(lname) {
    this.#_lName = lname;
  }

  get lName() {
    return this.#_lName;
  }

  #getFullName() {
    return this.#_fName + ' ' + this.#_lName;
  }

  display() {
    console.log('First Name :' + this.#_fName);
    console.log('Last Name : ' + this.#_lName);
    console.log('Full Name : ' + this.#getFullName());
  }
}

let student1 = new Student();
student1.fName = 'John';
student1.lName = 'Wick';
student1.display();
*/

/*
class Student {
  static #_fName = 'Mitho';
  static #_lName = 'NK';

  static set fName(fname) {
    Student.#_fName = fname;
  }

  static get fName() {
    return Student.#_fName;
  }

  static set lName(lname) {
    Student.#_lName = lname;
  }

  static get lName() {
    return Student.#_lName;
  }

  static #getFullName() {
    return Student.#_fName + ' ' + Student.#_lName;
  }

  static display() {
    console.log('First Name :' + Student.#_fName);
    console.log('Last Name : ' + Student.#_lName);
    console.log('Full Name : ' + Student.#getFullName());
  }
}

Student.fName = 'Tamil';
Student.lName = 'Nila';
Student.display();
*/

class Student {
  static #_fName = 'Mitho';
  static #_lName = 'NK';

  static set fName(fname) {
    Student.#_fName = fname;
  }

  static get fName() {
    return Student.#_fName;
  }

  static set lName(lname) {
    Student.#_lName = lname;
  }

  static get lName() {
    return Student.#_lName;
  }

  static #getFullName() {
    return Student.#_fName + ' ' + Student.#_lName;
  }

  static display() {
    console.log('First Name :' + Student.#_fName);
    console.log('Last Name : ' + Student.#_lName);
    console.log('Full Name : ' + Student.#getFullName());
  }
}

Student.fName = 'Tamil';
Student.lName = 'Nila';
Student.display();
