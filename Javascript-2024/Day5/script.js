//console.log('Test');

// let myName;

// myName = window.prompt('Enter Your Name : ');

// console.log(`Your Name is ${myName}`);

// document.getElementById('mySubmit').onclick = function () {
//   let myName = document.getElementById('myName').value;
//   console.log(myName);
// };

// function myFunction() {
//   //   let myName = document.getElementById('myName').value;
//   //   console.log(myName);
// }

// document.getElementById('mySubmit').addEventListener('click', myFunction);

// function myFunction() {
//   let myName = document.getElementById('myName').value;
//   console.log(myName);
// }

document.getElementById('mySubmit').addEventListener('click', myFunction);
function myFunction() {
  let myName = document.getElementById('myName').value;
  console.log(myName);
  if (myName.length == 0) {
    document.getElementById('msg').innerText = ``;
  } else {
    document.getElementById('msg').innerText = `Your Name is ${myName}`;
  }
}
