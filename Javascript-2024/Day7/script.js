/*
document.getElementById('btnAdd').addEventListener('click', add);
document.getElementById('btnSubtract').addEventListener('click', subtract);
document.getElementById('btnMultiply').addEventListener('click', multiply);
document.getElementById('btnDivide').addEventListener('click', divide);

function add() {
  let num1 = document.getElementById('number1').value;
  let num2 = document.getElementById('number2').value;

  let output = Number(num1) + Number(num2);
  document.getElementById('result').innerText = output;
}

function subtract() {
  let num1 = document.getElementById('number1').value;
  let num2 = document.getElementById('number2').value;

  let output = Number(num1) - Number(num2);
  document.getElementById('result').innerText = output;
}

function multiply() {
  let num1 = document.getElementById('number1').value;
  let num2 = document.getElementById('number2').value;

  let output = Number(num1) * Number(num2);
  document.getElementById('result').innerText = output;
}

function divide() {
  let num1 = document.getElementById('number1').value;
  let num2 = document.getElementById('number2').value;

  let output = Number(num1) / Number(num2);
  document.getElementById('result').innerText = output;
}
  */

/*
function getFullName(fname, lname, callback) {
  let fullname = `${fname} ${lname}`;
  callback(fullname);
}

//getFullName('Mithursan', 'Kalanantharasan');
getFullName('Yathursan', 'Kalanantharasan', myName);

// function displayResult(result) {
//   document.getElementById('result').innerText = result;
// }

function myName(a) {
  document.getElementById('result').innerText = 'My Name is ' + a;
}
*/

document.getElementById('btnAdd').addEventListener('click', add);
document.getElementById('btnSubtract').addEventListener('click', subtract);
document.getElementById('btnMultiply').addEventListener('click', multiply);
document.getElementById('btnDivide').addEventListener('click', divide);

function add() {
  let num1 = document.getElementById('number1').value;
  let num2 = document.getElementById('number2').value;

  let output = Number(num1) + Number(num2);
  displayResult(output);
}

function subtract() {
  let num1 = document.getElementById('number1').value;
  let num2 = document.getElementById('number2').value;

  let output = Number(num1) - Number(num2);
  displayResult(output);
}

function multiply() {
  let num1 = document.getElementById('number1').value;
  let num2 = document.getElementById('number2').value;

  let output = Number(num1) * Number(num2);
  displayResult(output);
}

function divide() {
  let num1 = document.getElementById('number1').value;
  let num2 = document.getElementById('number2').value;

  let output = Number(num1) / Number(num2);
  displayResult(output);
}

function displayResult(result) {
  document.getElementById('result').innerText = result;
}
