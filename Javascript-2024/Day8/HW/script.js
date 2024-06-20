document.getElementById('add').addEventListener('click', () => add());
document.getElementById('sub').addEventListener('click', () => sub());
document.getElementById('mul').addEventListener('click', () => mul());
document.getElementById('div').addEventListener('click', () => div());

let add = () => {
  let num1 = document.getElementById('number1').value;
  let num2 = document.getElementById('number2').value;
  let output = Number(num1) + Number(num2);
  document.getElementById('result').innerText = output;
};

sub = () => {
  let num1 = document.getElementById('number1').value;
  let num2 = document.getElementById('number2').value;
  let output = Number(num1) - Number(num2);
  document.getElementById('result').innerText = output;
};

mul = () => {
  let num1 = document.getElementById('number1').value;
  let num2 = document.getElementById('number2').value;
  let output = Number(num1) * Number(num2);
  document.getElementById('result').innerText = output;
};

div = () => {
  let num1 = document.getElementById('number1').value;
  let num2 = document.getElementById('number2').value;
  let output = Number(num1) / Number(num2);
  document.getElementById('result').innerText = output;
};
