//1_basic_literals.js
//Uses ES5

//Basic format
//object.method();

//Primitive data type
const s1 = 'Hello';
console.log(typeof s1);
s1.toUpperCase();
console.log(typeof s1);

//Object
const s2 = new String('Hello');
console.log(typeof s2);

console.log(navigator.appVersion);

//Object literals
const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

const book2 = {
    title: 'Book Two',
    author: 'Jane Doe',
    year: '2016',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

//Call the whole object
console.log(book1);
//Call property of object
console.log(book1.title);
//Call function in object
console.log(book1.getSummary());
//Get all values of an object
console.log(Object.values(book2));
//Get all the keys of an object
console.log(Object.keys(book2));