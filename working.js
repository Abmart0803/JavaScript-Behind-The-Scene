// Prcatice exercise
function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1991 && birthYear <= 1996) {
      var millenial = true;
      var str = `Oh, you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
  }
  printAge();

  return age;
  console.log(age);
}
const firstName = 'Martins';
calcAge(1993);

console.log(me);
// console.log(job);
// console.log(year);

var me = 'Martins';
let job = 'Web Developer';
const year = 1980;

if (!numProducts) deleteShoppingCart();

// const numProducts = 10;

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

const martins = {
  firstName: 'Martins',
  year: 1980,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
  greet: () => {
    console.log(this);
    console.log(`Hay ${this.firstName}`);
  },
};
martins.greet();

// primitive types
let lastName2 = 'Martins';
let oldLastName = lastName2;

lastName2 = 'Abiola.';

console.log(lastName2, oldLastName);

//Reference types.
const jessica = {
  fistName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

//Coppying Objects.
const jessica2 = {
  fistName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicCopy = Object.assign({}, jessica2);
jessicCopy.lastName = 'Steven';
jessicCopy.family.push('Martins', 'John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicCopy);
