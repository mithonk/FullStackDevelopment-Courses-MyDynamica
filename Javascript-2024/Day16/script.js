// console.log('Test');

/*
try {
  console.log(ABC);
} catch (error) {
  console.log(error.message);
  console.log(error.name);
  console.log(error.stack);
}
console.log('DEF');
*/

/*
try {
//   let ABC = 10;
  console.log(ABC);
} catch (e) {
  console.log(e.message);
  console.log(e.name);
  console.log(e.stack);
} finally {
  console.log('This is Finally');
}
console.log('DEF');
*/
/*
try {
  let x = 5 / 0;
  if (x == Infinity) {
    // throw new Error('Divided by 0 Error');
    let err = new Error('Divided by 0 Error');
    throw err;
  }
  console.log(x);
} catch (e) {
  console.log(e.message);
}
*/
/*
function sum(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error('Not a Valid Number');
  }

  return num1 + num2;
}

try {
  let x = sum('Mitho', '12');
  console.log(x);
} catch (e) {
  console.log(e.message);
}
console.log('End');
*/

/*
function sum(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error('Not a Valid Number');
  }
  if (num1 == 0) {
    throw new Error('Num1 is 0');
  }

  return num1 + num2;
}

try {
  let x = sum(0, '12');
  console.log(x);
} catch (e) {
  console.log(e.message);
}
console.log('End');
*/

function sum(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    let e = new Error('Not a Valid Number');
    e.name = 'NumberError1';
    throw e;
  }
  if (num1 == 0) {
    let e = new Error('Num1 is 0');
    e.name = 'NumberError2';
    throw e;
  }

  return num1 + num2;
}

try {
  let x = sum(0, '12');
  console.log(x);
} catch (e) {
  //   console.log(e.message);
  //   console.log(e.name);
  if (e.name == 'NumberError2') {
    console.log('This is 0 Error');
  }
}
console.log('End');
