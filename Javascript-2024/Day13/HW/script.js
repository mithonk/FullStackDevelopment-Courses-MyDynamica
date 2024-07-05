// console.log('Test');

class Student {
  constructor(id, fname, lname, mathsMark, tamilMark, EnglishMark) {
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.mathsMark = mathsMark;
    this.tamilMark = tamilMark;
    this.EnglishMark = EnglishMark;
  }

  calcTotal() {
    let total = this.mathsMark + this.tamilMark + this.EnglishMark;
    return total;
  }

  calcAvg(total) {
    let avg = total / 3;
    return avg;
  }

  getResult(avg) {
    let result;
    if (avg >= 75 && avg <= 100) {
      result = 'A';
    } else if (avg >= 65 && avg < 75) {
      result = 'B';
    } else if (avg >= 55 && avg < 65) {
      result = 'C';
    } else if (avg >= 45 && avg < 55) {
      result = 'D';
    } else if (avg >= 0 && avg < 45) {
      result = 'F';
    }

    return result;
  }

  display() {
    console.log(this.id);
    console.log(this.fname);
    console.log(this.lname);
    console.log(this.calcTotal());
    console.log(this.calcAvg(this.calcTotal()));
    console.log(this.getResult(this.calcAvg()));
  }
}

let student1 = new Student(1001, 'Leo', 'Das', 85, 75, 80);

student1.display();
