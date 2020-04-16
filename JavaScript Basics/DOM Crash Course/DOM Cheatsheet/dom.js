//dom.js

//Will show us all the properties and methods
//attached to document object
//Allows us to examine the document object and see
//the properties and methods we can access and manipulate
console.dir(document);

//Logs the domain
console.log(document.domain);

//Logs the URL
console.log(document.URL);

//Logs title of page
console.log(document.title);
//document.title = 123;

//Log the document type
console.log(document.doctype);

//Logs the head element
console.log(document.head);

//HTML collection of everything that is in the DOM
//We can grab an item by its index
console.log(document.all);
console.log(document.all[10]);

//Get all the forms on the page
console.log(document.forms);

//Gets all the links on the page
console.log(document.links);

//Gets all the images on the page
console.log(document.images);

//=-=-=-=-=-=-=-=-= Get Element By Id =-=-=-=-=-=-=-=-=
//Grabs our header by its id
console.log(document.getElementById('header-title'));
//Another method
const headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent = 'Hello';  //Does not pay attention to style
headerTitle.innerText = 'Goodbye';  //Pays attention to style
headerTitle.innerHTML = '<h3>Hello</h3>';

const header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px black';

//=-=-=-=-=-=-=-=-= Get Elements By Classname =-=-=-=-=-=-=-=-=
//Select list items
const items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';
//Change style of multiple elements
for(let i =0; i < items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4';
}

//=-=-=-=-=-=-=-=-= Get Elements By Tagname =-=-=-=-=-=-=-=-=
//Grabs all li elements (basically same as above)
const li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';
//Change style of multiple elements
for(let i = 0; i < li.length; i++){
    li[i].style.backgroundColor = '#f4f4f4';
}

//=-=-=-=-=-=-=-=-= QuerySelector (BEST METHOD - single element) =-=-=-=-=-=-=-=-=
//Can select anything (tag, id, class, etc)
//Grabs main header id
const newHeader = document.querySelector('#main-header');
newHeader.style.borderBottom = 'solid 4px #ccc';

//By tag - will only grab first one by default
const input = document.querySelector('input');
input.value = 'Hello World';

//Select by tag, a specific type
const submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

//Select class (does first one)
const item = document.querySelector('.list-group-item');
item.style.color = 'red';

//Select last item in list
const lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'red';

const secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';

//=-=-=-=-=-=-=-=-= QuerySelectorAll (BEST METHOD - multiple elements) =-=-=-=-=-=-=-=-=
//Grabs everything under class title
const titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';

//Grab all list elements
const odd = document.querySelectorAll('li:nth-child(odd)');
for(let i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'black';
}
const even = document.querySelectorAll('li:nth-child(even)');
for(let i = 0; i < even.length; i++){
    even[i].style.backgroundColor = 'white';
}

//=-=-=-=-=-=-=-=-= Traversing the DOM =-=-=-=-=-=-=-=-=

const itemList = document.querySelector('#items');
//parentNode
console.log(itemList.parentNode);   //Parent of list is #main
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode);    //parent of #main is container

//parentElement (same as above; parentNode = parentElement)
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement);

//childNodes
//try not to use childNodes - includes whitespace in our HTML formatting
console.log(itemList.childNodes);

//children - preferred method
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

//firstChild - includes whitespace
//try not to use
console.log(itemList.firstChild)

//firstElementChild - preferred method
console.log(itemList.firstElementChild);
itemList.firstElementChild.style.backgroundColor = 'white';

//lastChild - includes whitespace
//try not to use
console.log(itemList.lastChild);

//lastElementChild - preferred method
console.log(itemList.lastElementChild);
itemList.lastElementChild.style.backgroundColor = '#f4f4f4';

//nextSibling - includes whitespace
//try not to use
console.log(itemList.nextSibling);

//nextElementSibling - preferred method
console.log(itemList.nextElementSibling);

//previousSibling - includes whitespace
//try not to use
console.log(itemList.previousSibling);

//previousElementSibling - preferred method
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

//=-=-=-=-=-=-=-=-= Creating Elements =-=-=-=-=-=-=-=-=
//createElement - create a div
const newDiv = document.createElement('div');
newDiv.className = 'hello'; //add class
newDiv.id = 'hello1';       //add id
newDiv.setAttribute('title', 'Hello Div');  //add attribute
const newDivText = document.createTextNode('Hello World');  //create text node
newDiv.appendChild(newDivText); //add text to div

//Insert new div before our header
const container = document.querySelector('header .container');
const h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);
newDiv.style.fontSize = '30px';

console.log(newDiv);

//=-=-=-=-=-=-=-=-= Events =-=-=-=-=-=-=-=-=
//Method 1
//const button = document.getElementById('button').addEventListener(
    //'click', function(){
       // console.log(123);
    //});

//Method 2 - Ideal method
const button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(){
    console.log('Button clicked');
    document.getElementById('header-title').textContent = 'Item Lister';
    document.querySelector('#main').style.backgroundColor = '#fff';
}

//Pass in event parameter
function buttonClick(e){
    console.log(e.target);  //Get what was triggered
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
    //Add output text
    const output = document.getElementById('output');
    output.innerHTML = '<h3>'+e.target.id+'</h3>';

    console.log(e.type);    //What type of event
    console.log(e.clientX); //Position of mouse on X axis (in window)
    console.log(e.clientY); //Position of mouse on Y axis (in window)

    console.log(e.offsetX); //Position of mouse in element
    console.log(e.offsetY); //Position of mouse in element

    console.log(e.altKey);  //Tells if altKey was held down when clicked
    console.log(e.ctrlKey); //Tells if ctrlKey was held down when clicked
    console.log(e.shiftKey);//Tells if shiftkey was held down when clicked
}

const button1 = document.getElementById('button');
//Different mouse events
button1.addEventListener('click', runEvent);
button1.addEventListener('dblclick', runEvent);
button1.addEventListener('mouseup', runEvent);
button1.addEventListener('mousedown', runEvent);

const box = document.getElementById('box');
//logs when mouse enters box
box.addEventListener('mouseenter', runEvent);
//logs when mouse leaves box
box.addEventListener('mouseleave', runEvent);
//logs when mouse is over any inner parts of box
box.addEventListener('mouseover', runEvent);
//logs when mouse leaves any inner parts of box
box.addEventListener('mouseout', runEvent);
//logs when mouse moves within box
box.addEventListener('mousemove', runEvent);

function runEvent(e){
    console.log(`Event type: ${e.type}`);
    output.innerHTML = `<h3>MouseX: ${e.offsetX}</h3><h3>MouseY: ${e.offsetY}</h3>`;
    box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
    document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
}

const itemInput = document.querySelector('input[type="text"]');
//listen for when a key moves down
itemInput.addEventListener('keydown', runEvent1);
//listen for when a key moves up
itemInput.addEventListener('keyup', runEvent1);
//listen for when key is pressed
itemInput.addEventListener('keypress', runEvent1);
//listen for when form box is clicked inside of
itemInput.addEventListener('focus', runEvent1);
//listen for when form box is clicked out of
itemInput.addEventListener('blur', runEvent1);
//listens for if something is cut from the form
itemInput.addEventListener('cut', runEvent1);
//listens for if something is pasted into the form
itemInput.addEventListener('paste', runEvent1);
//Anything you do with the input for the form, it can trigger the event
itemInput.addEventListener('input', runEvent);

function runEvent1(e){
    console.log(`Event type: ${e.type}`);
    //logs the target being pressed (like what key)
    console.log(e.target.value);
    //Outputs target being pressed
    document.getElementById('output').innerHTML = `<h3>${e.target.value}</h3>`;
    //makes display vanish
    document.body.style.display = 'none';
}

const select = document.querySelector('select');
//Listens for any change in selection menu
select.addEventListener('change', runEvent2);
select.addEventListener('input', runEvent2);    //same as above

function runEvent2(e){
    console.log(`Event type: ${e.type}`);
    console.log(e.target.value);
}

const form = document.querySelector('form');
form.addEventListener('submit', runEvent3);
function runEvent3(e){
    e.preventDefault(); //for submit
    console.log(`Event type: ${e.type}`);
}