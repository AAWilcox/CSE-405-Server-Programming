//3_prototypes.js
//Uses ES5

//Constructor
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

//Prototype getAge
Book.prototype.getAge = function() {
    //Get how old the book is
    //new Date().getFullYear() = Get 4 digit year (today's year)
    //Subtract today's year from year book was published
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

//Prototype revise/change year
Book.prototype.revise = function(newYear) {
    //Set new year
    this.year = newYear;
    //Add revised to object
    this.revised = true;
}

//Instatiate an object (create a new object)
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');

console.log(book1);
console.log(book1.title);
console.log(book2.getSummary());
console.log(book2.getAge());
console.log(book2);
book2.revise(2020);
console.log(book2);