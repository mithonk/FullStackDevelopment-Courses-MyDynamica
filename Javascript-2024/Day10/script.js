// console.log('Test');

let obj = {
  firstName: 'Mithursan',
  lastName: 'Kalanantharasan',
  age: 26,
};

// console.log(obj);
// console.log(obj.firstName);

// obj.gender = 'Male';

// console.log(obj);

// delete obj.age;
// console.log(obj);

// obj.firstName = 'Yathursan';
// console.log(obj);

// console.log('age' in obj);
// console.log('firstName' in obj);

for (let key in obj) {
  console.log(key);
}
