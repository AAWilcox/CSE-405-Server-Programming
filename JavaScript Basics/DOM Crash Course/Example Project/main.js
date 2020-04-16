//main.js

const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);
//Delete event
itemList.addEventListener('click', removeItem);
//Filter event
filter.addEventListener('keyup', filterItems);

//Add item
function addItem(e){
    e.preventDefault();

    //Get input value
    const newItem = document.getElementById('item').value;

    //Create new li element
    const li = document.createElement('li');
    //Add class
    li.className = 'list-group-item';
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create delete button element
    const deleteBtn = document.createElement('button');
    //Add classes
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //Add text node
    deleteBtn.appendChild(document.createTextNode('X'));
    //Add btn to li
    li.appendChild(deleteBtn);

    //Add li to list
    itemList.appendChild(li);
}

//Remove item
function removeItem(e){
    //Check to see if what we are clicking contains the class 'delete'
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            //parentElement is li
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//Filter items
function filterItems(e){
    //convert text to lowercase
    const text = e.target.value.toLowerCase();
    //Get items
    const items = itemList.getElementsByTagName('li');
    //Convert to array
    Array.from(items).forEach(function(item){
        const itemName = item.firstChild.textContent;
        //Compare search item and items in list
        //If they are matching
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}