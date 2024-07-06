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
  set fName(fname) {
    this.fname = fname;
  }
  get fName() {
    console.log(this.fname);
  }
}

let student1 = new Student();
