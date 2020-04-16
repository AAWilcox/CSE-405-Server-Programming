//JavaScript object
/*
let person = {
    name: "Brad",
    age: 35,
    address:{
        street:"5 main st",
        city: "Boston"
    },
    children:["Brianna", "Nicholas"]
}

console.log(person.name);
console.log(person.address.street);
console.log(person.children[0]);

//Convert to valid JSON
person = JSON.stringify(person);
console.log(person);
person = JSON.parse(person);
console.log(person);

//Array with objects
let people = [
    {
        name: "Brad",
        age: 35
    },
    {
        name: "John",
        age: 40
    },
    {
        name: "Sara",
        age: 25
    }
];

console.log(people[1].age);

//Loop through array
let output = '';
for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
    output += `<li>${people[i].name}</li>`;
}
document.getElementById('people').innerHTML = output;*/

//Make HTTP Request
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       const response = JSON.parse(xhttp.responseText);
        const people = response.people;

        let output = '';
        for(let i = 0; i < people.length; i++){
        console.log(people[i].name);
        output += `<li>${people[i].name}</li>`;
        }
        document.getElementById('people').innerHTML = output;
    }
};
xhttp.open("GET", "people.json", true);
xhttp.send();