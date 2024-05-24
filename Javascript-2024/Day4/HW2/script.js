/*
let NIC_No;

NIC_No = '971373016v';

console.log(NIC_No);
let NIC_Arr = NIC_No.split('');

if (
  NIC_No.length == 10 &&
  NIC_Arr[0] >= 0 &&
  (NIC_Arr[9] == 'x' || NIC_Arr[9] == 'v')
) {
  console.log('This is correct');
} else {
  console.log('This is wrong');
}
*/

let nicNo = '971373016v';

if (
  nicNo.charAt(0) >= 0 &&
  nicNo.length == 10 &&
  (nicNo.endsWith('x') || nicNo.endsWith('v'))
) {
  console.log('This is correct');
} else {
  console.log('This is wrong');
}
