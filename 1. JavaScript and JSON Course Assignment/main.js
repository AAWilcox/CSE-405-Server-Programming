//Create grocery class
class groceryItem{
    constructor(name, price, id){
        this.name = name;
        this.price = price;
        this.id = id;
    }

    getSummary(){
        return `${this.name} is priced at $${this.price} with id:${this.id}`;
    }
}

//Instantiate objects
const carrot = new groceryItem('Carrot', 1.05, 1356);
const soap = new groceryItem('Soap', 3.00, 5798);
const ranch = new groceryItem('Ranch', 4.99, 2590);

console.log(soap.getSummary());

//Array to hold objects
const items = [];
items.push(carrot);
items.push(soap);
items.push(ranch);
console.log(items);

//Convert to string
const carrotJSON = JSON.stringify(carrot);
console.log(carrotJSON);

//Convert back to JavaScript object
carrotJS = JSON.parse(carrotJSON);
console.log(carrotJS);

//Create array of item names
const itemNames = items.map(n =>n.name);
console.log(itemNames);

//Make HTTP Request
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       const response = JSON.parse(xhttp.responseText);
        const groceryItems = response.groceryItems;

        let output = '';
        for(let i = 0; i < groceryItems.length; i++){
        console.log(groceryItems[i].name);
        output += `<li>${groceryItems[i].name}</li>`;
        }
        document.getElementById('jsontestspace').innerHTML = output;
    }
};
xhttp.open("GET", "main.json", true);
xhttp.send();