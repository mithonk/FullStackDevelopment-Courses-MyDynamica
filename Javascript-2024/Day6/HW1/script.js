document.getElementById('add').addEventListener('click', add);
document.getElementById('sub').addEventListener('click', sub);
document.getElementById('mul').addEventListener('click', mul);
document.getElementById('div').addEventListener('click', div);

function add() {
  let Operater = '+';
  viewResult(Operater);
}

function sub() {
  let Operater = '-';
  viewResult(Operater);
}

function mul() {
  let Operater = 'x';
  viewResult(Operater);
}

function div() {
  let Operater = '/';
  viewResult(Operater);
}

function viewResult(Operater) {
  let num1 = document.getElementById('number1').value;
  let num2 = document.getElementById('number2').value;

  num1 = Number(num1);
  num2 = Number(num2);

  if (Operater == '+') {
    document.getElementById('result').innerText = num1 + num2;
  } else if (Operater == '-') {
    document.getElementById('result').innerText = num1 - num2;
  } else if (Operater == 'x') {
    document.getElementById('result').innerText = num1 * num2;
  } else {
    document.getElementById('result').innerText = num1 / num2;
  }
}
