// console.log('Test');
/*
import { x, PrintName, Student, Employee } from './app.js';
// import PrintName from './app.js';

console.log(x);
PrintName();

let student1 = new Student(1001, 'Johnsan');
student1.display();

let employee1 = new Employee(1002, 'Kanesh');
employee1.display();
*/

/*
import PrintName, * as data from './app.js';

console.log(data.x);

data.default();

let student1 = new data.Student(1001, 'Johnsan');
student1.display();

let employee1 = new data.Employee(1002, 'Kanesh');
employee1.display();
*/
/*
import PrintName, { x as y, Student as stu, Employee as emp } from './app.js';

console.log(y);

// PrintName();

let student1 = new stu(1001, 'Johnsan');
student1.display();

let employee1 = new emp(1002, 'Kanesh');
employee1.display();
*/
/*
import PrintName, * as data from './app.js';
// import * as data1 from './student.js';

console.log(data.x);

data.default();

let student1 = new data.Student(1001, 'Mithursan');
student1.display();

let employee1 = new data.Employee(1002, 'Kanesh');
employee1.display();
*/

// import { x, default as PrintName, Student, Employee } from './app.js';
// import { x, default as Print, Student, Employee } from './app.js';
// import Print, { x, Student, Employee } from './app.js';
import PrintName, { x, Employee } from './app.js';
import Student from './student.js';
import SchoolStudent from './school.js';

console.log(x);
PrintName();

let student1 = new Student(1001, 'Johnsan');
student1.display();

let SchoolStudent1 = new SchoolStudent(1003, 'Kavisan');
SchoolStudent1.display();

let employee1 = new Employee(1002, 'Kanesh');
employee1.display();
