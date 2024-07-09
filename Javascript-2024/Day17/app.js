/*
export let x = 10;

export function PrintName() {
  console.log('My name is Mithursan Kalanantharasan');
}

export class Student {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  display() {
    console.log(`Student ID : ${this.id}`);
    console.log(`Stuednt Name : ${this.name}`);
  }
}
*/
/*
let x = 10;

function PrintName() {
  console.log('My name is Mithursan Kalanantharasan');
}

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

export { x, PrintName, Student };
*/
/*
export let x = 10;

export default function PrintName() {
  console.log('My name is Mithursan Kalanantharasan');
}

export class Student {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  display() {
    console.log(`Student ID : ${this.id}`);
    console.log(`Stuednt Name : ${this.name}`);
  }
}

export class Employee {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  display() {
    console.log(`Employee ID : ${this.id}`);
    console.log(`Employee Name : ${this.name}`);
  }
}
*/
/*
let x = 10;

export default function PrintName() {
  console.log('My name is Mithursan Kalanantharasan');
}

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

class Employee {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  display() {
    console.log(`Employee ID : ${this.id}`);
    console.log(`Employee Name : ${this.name}`);
  }
}

export { x, Student, Employee };
*/

//import { Student } from './student.js';
let x = 10;

function PrintName() {
  console.log('My name is Mithursan Kalanantharasan');
}

class Employee {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  display() {
    console.log(`Employee ID : ${this.id}`);
    console.log(`Employee Name : ${this.name}`);
  }
}

export { x, PrintName as default, Employee };
