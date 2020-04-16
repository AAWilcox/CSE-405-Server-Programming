//5_object_create.js
//Uses ES5

//Does same thing as before, just another method

//Object of protos
const bookProtos = {
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
}

//Create Object - Method 1
const book1 = Object.create(bookProtos);
//Add properties
book1.title = 'Book One';
book1.author = 'John Doe';
book1.year = 2014;

console.log(book1);

//Create Object - Method 2
const book2 = Object.create(bookProtos, {
    title: {value: 'Book Two'},
    author: {value: 'Jane Doe'},
    year: {value: 2016}
});

console.log(book2);