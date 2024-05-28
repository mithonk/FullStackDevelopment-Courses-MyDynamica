// console.log('Test');

// function getFullName() {
//   console.log('I,m Mithursan');
// }

// getFullName();

// let firstName = 'Mithursan';
// let lastName = 'Kalanantharasan';

// function getFullName() {
//   console.log(`Your Full Name is ${firstName} ${lastName}`);
// }

// getFullName();

// function setName() {
//   let firstName = 'Mithursan';
//   let lastName = 'Kalanantharasan';
// }

// function getFullName() {
//   console.log(`Your Full Name is ${firstName} ${lastName}`);
// }

// setName();
// getFullName();

// function getFullName(fname, lname) {
//   console.log(`Your Full Name is ${fname} ${lname}`);
// }

// // getFullName('Mithursan', 'Kalanantharasan');
// // getFullName('Leo', 'Das');

// function setName() {
//   let firstName = 'Mithursan';
//   let lastName = 'Kalanantharsan';
//   getFullName(firstName, lastName);
// }
// debugger;
// setName();

// function getFullName(fname, lname) {
//   return `Your Full Name is ${fname} ${lname}`;
//   console.log(`Your Full Name is ${fname} ${lname}`);
// }

// let fullName = getFullName('Mithursan', 'Kalanantharasan');
// console.log(fullName);

// function getFullName(fname, lname) {
//   return `Your Full Name is ${fname} ${lname}`;
// }

// let fullName = getFullName('Leo', 'Das');
// console.log(fullName);

//

// document.getElementById('btn').addEventListener('click', getFullName);

// function getFullName() {
//   let fname = document.getElementById('firstName').value;
//   let lname = document.getElementById('lastName').value;
//   let fullName = `Your Full Name is ${fname} ${lname}`;

//   document.getElementById('fullName').innerText = fullName;
//   //console.log(`${fname} ${lname}`);
// }

document.getElementById('btn').addEventListener('click', setNames);

function setNames() {
  let fname = document.getElementById('firstName').value;
  let lname = document.getElementById('lastName').value;
  getFullNames(fname, lname);
}

function getFullNames(fname, lname) {
  document.getElementById(
    'fullName'
  ).innerText = `Your Full Name is ${fname} ${lname}`;
}
