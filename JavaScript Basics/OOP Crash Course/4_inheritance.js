//4_inheritance.js
//Uses ES5

//Book Constructor
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

//Prototype getSummary
//Gets function out of the constructor
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

//Magazine Constructor
function Magazine(title, author, year, month){
    //Inherits title, author, year properties from book
    Book.call(this, title, author, year);
    this.month = month;
}

//Inherit prototype
Magazine.prototype = Object.create(Book.prototype);

//Instantiate magazine object
const mag1 = new Magazine('Mag One', 'John Doe', 2018, 'Jan');

//Use magazine constructor
//By default, magazine object uses parent constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1);
console.log(mag1.getSummary());