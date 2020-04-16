//Since we are in a JS file, no need to include <script>

//Try not to use for debugging, it pauses the rest of the JS
//alert('Hello World');
//Instead, output to the console
//console is the object, log('Hello World') is the method
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');

//=-=-=-=-=-=-=-= Variables =-=-=-=-=-=-=-=
//var, let, const
//var: globally scoped, avoid using
//let: block scoped, allows reassigning
//const: block scoped, does not allow reassigning
//General Rule: Use const unless you know a variable needs reassigning
let years = 30;
years = 31;
console.log(years);

const score = 10;
console.log(score);

//=-=-=-=-=-=-=-= Data Types =-=-=-=-=-=-=-=
//Primitive data types: string, numbers, boolean, null, undefined
const name = 'John';    //String can be in ' ' or " "
const age = 30;
const rating = 4.5;     //No float or double in JS
const isCool = true;
const x = null;         //null = nothing, there's nothing in this variable
const y = undefined;
let z;                  //Also a way to make something undefined
//Testing the type:
console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);  //Console is wrong
console.log(typeof y);
console.log(typeof z);

//=-=-=-=-=-=-=-= Strings=-=-=-=-=-=-=-=

//Concatenation: Using string and other variables
//Old Method
console.log('My name is ' + name + ' and I am ' + age);
//New Method - Template String
console.log(`My name is ${name} and I am ${age}`);
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

//String Properties and Methods
//Properties: does not have parantheses
//Methods: has paratheses, a function associated with an object
const s = 'Hello World';
console.log(s.length);                          //Gets length (number of characters in string)
console.log(s.toUpperCase());                   //Change case to uppercase
console.log(s.toLowerCase());                   //Change case to lowercase                
console.log(s.substring(0, 5));                 //Pulls substring out of the string
                                                //Takes two indexes, where to start and where to end
console.log(s.substring(0, 5).toUpperCase());   //Can tak on additional methods
console.log(s.split(''));                       //Splits string into an array - ' ' means by char
const tags = 'technology, computers, it, code';
console.log(tags.split(', '));                  //Each word separated by ", " - will grab each word

//=-=-=-=-=-=-=-= Arrays =-=-=-=-=-=-=-=
//Variables that hold multiple values

//new uses Array constructor
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

//Creating an array without array constructor
//Can have multiple data types in the same array and do not have to set size
const fruits = ['apples', 'oranges', 'pears', 10, true];
console.log(fruits);
console.log(fruits[1]); //Accesses second element in array
fruits[3] = 'grapes';   //Add onto the end, not the best method to use an index
fruits.push('mangos');  //Pushes value onto the end of the array
fruits.unshift('strawberries')  //Pushes onto the front of the array
fruits.pop();   //Pops last value off back of array
console.log(Array.isArray(fruits))  //To check if fruits is an array
console.log(fruits.indexOf('oranges')); //To get the index of 'oranges'

//=-=-=-=-=-=-=-= Object Literals =-=-=-=-=-=-=-=
//Person object
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    //Can imbed object within object
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person);    //Will log the whole object
console.log(person.firstName, person.lastName); //Logging specific parts of person
console.log(person.hobbies[1]); //Gets item in first index of hobbies array in person
console.log(person.address.city);   //Gets city from address object which is in person

//Destructuring - creating variables
const { firstName, lastName, address: {city} } = person; //Not assigning, pulling these out of person
console.log(firstName);
console.log(city);

//Adding properties
person.email = 'john@gmail.com';
console.log(person.email);

//Array of objects
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    }
];
console.log(todos);
console.log(todos[1].text); //To get the text of the second object

//=-=-=-=-=-=-=-= JSON =-=-=-=-=-=-=-=
//Data format used when sending/receiving info from a server
//JSON.stringify transfors our array of objects into JSON format
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//=-=-=-=-=-=-=-= Loops =-=-=-=-=-=-=-=

//For-loops
for(let i = 0; i < 10; i++){
    console.log(`For Loop Number: ${i}`);
}

//While-loops
let i = 0;
while(i < 10){
    console.log(`While Loop Number: ${i}`);
    i++;
}

//=-=-=-=-=-=-=-= Looping through arrays=-=-=-=-=-=-=-=

//For-loop method
for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}

//For-of method
for(let t of todos){
    console.log(t.text);
}

//High-order array methods - preferred methods to iterate through arrays
//1. forEach: loops through the array
todos.forEach(function(t) {
    console.log(t.text);
});

//2. map: allows us to create a new array from an array
//returns an array of all the text elements from array "todos"
const todosText = todos.map(function(t){
    return t.text;
});
console.log(todosText);

//3. filter: allows us to create a new array based on a condition
//Will return an array with the objects in "todos" array that have isCompleted = true
const todosCompleted = todos.filter(function(t){
    return t.isCompleted === true;
});
console.log(todosCompleted);

//filter with extra things on it
//Will return an array with the text from the objects in "todos" array
//that have isCompleted = true
const todosCompletedText = todos.filter(function(t){
    return t.isCompleted === true;
}).map(function(t){
    return t.text;
})
console.log(todosCompletedText);

//=-=-=-=-=-=-=-= Conditionals =-=-=-=-=-=-=-=
const a = 10;
if(a == 10) {
    console.log('a is 10');
}

//== vs. ===
//== does not match data type. Below, if(A == 10) will be true
const A = '10';
if(A == 10) {
    console.log('A is 10?');
}
//=== does match data type. Below, if (A === 10) will not be true
//A is a string, the 10 in (A === 10) is a number. Data types do not match
if(A === 10) {
    console.log('A is a 10');
} else {
    console.log('A is not 10');
} 

//if-else, else-if
const B = 4;
if(B === 10){
    console.log('B is 10')
} else if (B > 10) {
    console.log('B is greater than 10');
} else {
    console.log('B is less than 10');
}

//Multiple conditions
const C = 11;
//OR - Only at least one needs to be true
if(B > 5 || C > 10){
    console.log('B is greater than 5 OR C is greater than 10');
}
//AND - Both need to be true
if(B > 3 && C > 10){
    console.log('B is greater than 5 AND C is greater than 10');
}

//Terinary conditions
const D = 12;
//Is D > 10? If true, set color to red, else set color to blue
const color = D > 10 ? 'red' : 'blue';
console.log(color);

//Switch
switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}

//=-=-=-=-=-=-=-= Functions =-=-=-=-=-=-=-=
function addNums(num1 = 1, num2 = 1){
    //Normally don't log anything to console in a function
    console.log(num1 + num2);
}
//Using default values
addNums();
//Not using default values
addNums(5, 4);

//Returning a value from a function
function addNum(num1, num2){
    return num1 + num2;
}
console.log(addNum(5, 5));

//Arrow functions
//Allows you to write a function in one line
//No need to include { } or return
const addNumbers = (num1, num2) => num1 + num2;
console.log(addNumbers(5, 6));

const addNumber = num1 => num1 + 5;
console.log(addNumber(7));

todos.forEach((t) => console.log(t));
todos.forEach((t) => console.log(t.text));

//=-=-=-=-=-=-=-= Object Oriented Programming (OOP) =-=-=-=-=-=-=-=

//Method 1: Constructor function with prototypes (ES5)

//Constructor function
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);   //Create date object
    //Create function within constructor
    //Can do this method, but not the best. Prototype below instead
   // this.getBirthYear = function() {
        //return this.dob.getFullYear();
    //}
}

//Prototype functions that go along with object
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

//Instantiate object (create new object with constructor function)
const person1 = new Person('Alyssa', 'Wilcox', '5-26-1998');
const person2 = new Person('Alex', 'Mammoth', '1-16-1997');

console.log(person1);
console.log(person2.firstName);
console.log(person2.dob);
console.log(person2.dob.getFullYear()); //lots of methods for dob object
console.log(person1.getBirthYear());    //Using a function to get birth year
console.log(person1.getFullName());     //Using a function to get full name

//Method 2: Classes (ES6)

class People {
    constructor(fristName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);   //Create date object
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

//Instantiate object
const people1 = new People('Gilbert', 'Hopkins', '4-9-1998');
const people2 = new People('Josh', 'Hobbs', '5-25-1997');

console.log(people1.getFullName());
console.log(people1);

//=-=-=-=-=-=-=-= DOM =-=-=-=-=-=-=-=
//DOM = Document Object Model
//Tree structure of your whole document

//=-=-= Selecting things from the DOM =-=-=

//Can select HTML elements and put them into variables

console.log(window); //Window is parent object of browser
//window.alert(1); = alert(1);

//1. Single element selectors

//document. is the way to grab elements in the document
//getElementById() is the way to grab single elements
console.log(document.getElementById('myForm'));
//Does same as above
//const form = document.getElementById('myForm');
//console.log(form);

//querySelector allows you to select other elements (class, h1, etc)
console.log(document.querySelector('h1'));  //Will only select first h1

//2. Multiple Elements

//Gives NodeList of all our items in our unordered list
//Like an array
console.log(document.querySelectorAll('.item'));

//Gives HTML Collection - cannot use array methods on it
//Almost same as above, but older method. Try not to use
//console.log(document.getElementByClassName('item'));

//Gives HTML Collection - cannot use array methods on it
//Almost same as above, but older method. Try not to use
//console.log(document.getElementByTagName('li'));

//Will loop through each item in unordered list
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

//=-=-= Manipulating the DOM =-=-=
//Changing things in the user interface

//select ul (single element) with class of items
const ul = document.querySelector('.items');
//ul.remove();  //Removes whole list
//ul.lastElementChild.remove();   //Removes last item in list
ul.firstElementChild.textContent = 'Hello'; //Changes text of first item in list
ul.children[1].innerText = 'Brad';  //Changes text of second child

//Can change HTML dynamically with innerHTML
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

//Select btn class
const btn = document.querySelector('.btn');
//btn.style.background = 'red';

//Adding in an event
//('click' - what causes the event, (e) -> the event)
//'click', 'mouseover', 'mouseout', etc
btn.addEventListener('mouseover', (e) => {
    e.preventDefault(); //Prevent default behavior (for submit)
    console.log(e.target);  //Will get the button element
    console.log(e.target.className); 
    console.log('click');
    //Change background color of form
    document.querySelector('#myForm')
    .style.background = '#ccc';

    //Change background of body with .css class "bg-dark"
    document.querySelector('body').classList.add('bg-dark');

    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
})