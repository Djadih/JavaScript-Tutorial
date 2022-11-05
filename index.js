// Place script below the elements for better UX.
// console.log('Hello World');

// let name = 'Hussam';
// console.log(typeof(name));

// // learning constants
// const rate = 0.3;
// // console.log(rate);

// let approved = true;
// let variable = null;
// console.log(typeof(variable));

// // Dynamic typing
// name = 4;
// console.log(typeof(name));

// Reference Types (objects)
// let name = 'Hussam';
// let age = 30;
let person = {
    name: 'Hussam',
    age: 30
}

// Dot notation
person.name = 'John';

// Bracket notation
let selection = 'name'
person[selection] = 'Phil';

console.log(person['name']);