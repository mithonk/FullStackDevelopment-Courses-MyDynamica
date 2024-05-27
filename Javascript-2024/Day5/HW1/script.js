document.getElementById('mySubmit').addEventListener('click', myFunction);
function myFunction() {
  let nicNo = document.getElementById('nicNo').value;
  //   console.log(nicNo);

  if (
    nicNo.length == 10 &&
    nicNo.substring(0, 9) >= 0 &&
    (nicNo.endsWith('x') || nicNo.endsWith('v'))
  ) {
    document.getElementById(
      'msg'
    ).innerText = `Your NIC Number ${nicNo} is Correct`;
  } else {
    document.getElementById(
      'msg'
    ).innerText = `Your NIC Number ${nicNo} is Wrong. Plese Check Your NIC Number.`;
  }
}
