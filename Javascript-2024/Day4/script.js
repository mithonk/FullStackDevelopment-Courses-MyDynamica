//console.log('test');

//let m = 'Mithursan Kalanantharasan';

// console.log(m, typeof m);
// console.log(m.length);

//m = m.length;
//console.log(m);

//m = new String(m);
//console.log(m, typeof m); //type object

// console.log(m[5]);
// console.log(m.charAt(5));

// console.log(m.indexOf('h'));
// console.log(m.indexOf('a'));
// console.log(m.lastIndexOf('a'));

// console.log(m.substring(0, 9));
// console.log(m.toUpperCase());
// console.log(m.toLowerCase());

// console.log(m.includes('Mithursan'));
// console.log(m.includes('MithursanK'));
// console.log(m.endsWith('n'));

// console.log(m.replace('M', 'N'));
// console.log(m.split(' '));

// let arr = m.split(' ');

// console.log(arr[0]);
// console.log(arr[1]);

// console.log(arr.length);
// console.log(m.length);
// console.log(arr[0].length);
// console.log(arr[1].length);

// let arr = m.split('');
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i].toUpperCase());
// }

// let m = ' Mithursan ';
// console.log(m.length);

// //m = m.trim();
// m = m.trimEnd();
// m = m.trimStart();
// console.log(m.length);

/*
let fname = 'Mithursan';
let lname = 'Kalanantharasan';
//let fullname = 'Full Name is ' + fname + ' ' + lname;
let fullname = `Full Name is ${fname} ${lname}`; //New Version
console.log(fullname);
*/

let objFname = new String('Mithursan');
let objLname = objFname;
console.log(objFname);
console.log(objLname);
objLname = new String('Kalanantharasan');
console.log(objFname);
console.log(objLname);
