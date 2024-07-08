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
