//index.js

document.addEventListener('DOMContentLoaded', () => {

    //Register
    registerButton = document.getElementById("register_submit_button");
    registerButton.addEventListener('click', (e) => {
        e.preventDefault();

        //Get values
        const email = register_email.value;
        const password = register_password.value;

        //Clear the form
        document.getElementById("register_form").reset();

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(user) {
            console.log(user);
        }).catch(function(error) {
            // Handle Errors here
            console.log(error);
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    });

    //Login
    loginButton = document.getElementById("login_submit_button");
    loginButton.addEventListener('click', (e) => {
        e.preventDefault();

        //Get values
        const email = login_email.value;
        const password = login_password.value;

        //Clear the form
        document.getElementById("login_form").reset();

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(user) {
            console.log(user);
        }).catch(function(error) {
            // Handle Errors here
            console.log(error);
            var errorCode = error.code;
            var errorMessage = error.message;
          });
    });

    //Will be called whenever the auth state changes
    //Firebase stores user in local storage, so Firebase will remember
    //users already logged in on a device they have logged in with
    //previously
    firebase.auth().onAuthStateChanged(function(user) {

        todoSubmitButton = document.getElementById("todo_submit");

        //Grab To Do Item List
        itemList = document.getElementById("items");

        //User is signed in
        if (user) {
          console.log(user);
          //To-do is visible
          todo.style.display = "block";
          //Register not visible
          register.style.display = "none";
          //Sign in not visible
          login.style.display = "none";
          //Logout button is not visible
          logout.style.display = "block";
          //To do item list is visible
          todo_list.style.display = "block";

          //Read To-Do items from database
          readData();
          
          //To-Do
          todoSubmitButton.addEventListener('click', (e) => {
            e.preventDefault();
            //Get to-do form value
            const todo = todo_text.value;
            //Make database ref
            //Uses user's uid to save their to-dos
            firebase.database().ref("/users/" + user.uid).child("/todos").push(todo);
            //Add item to To-Do List
            addItem(todo);
            //Clear form
            document.getElementById("todo_form").reset();
          });

          //Remove an item from To-Do list
          //itemList.addEventListener('click', removeItem);
          delete_btn.addEventListener('click', removeItem);

          //Logout
          logout.addEventListener('click', LogOut);
        } 
        //No user is signed in
        else {
            //To do is not visible
            todo.style.display = "none";
            //Register visible
            register.style.display = "block";
            //Sign in visible
            login.style.display = "block";
            //Logout button is visible
            logout.style.display = "none";
            //To do list is not visible
            todo_list.style.display = "none";
            console.log("no user");
        }
    });
});

function LogOut(e){
    e.preventDefault();
    firebase.auth().signOut();
    //Remove items from list
    const itemList = document.getElementById("items");
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }
}

function addItem(todo){
    //Create new li element
    const li = document.createElement("li");
    //Add class
    li.className = "todo_list_item";
    //Add text node with input value
    li.appendChild(document.createTextNode(todo));
    //Add li to list
    itemList.appendChild(li);
}

function removeItem(e){
    e.preventDefault();
    //Remove items from list
    const itemList = document.getElementById("items");
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }

    //Get user id
    var userId = firebase.auth().currentUser.uid;
    //Remove items from database
    firebase.database().ref('/users/' + userId).child("/todos").remove();
}

function readData(){
    //Get user id
    var userId = firebase.auth().currentUser.uid;
    //Get data from database
    return firebase.database().ref('/users/' + userId).child("/todos").once('value').then(function(snapshot) {
        //Array of to-do items
        //Loop through values attached to keys
        snapshot.forEach(data => {
            const items = data.val();
            addItem(items);
        });
        /*
        const data = (snapshot.val());
        console.log(data);
        //const itemkeys = getValue()
        const itemkeys = Object.keys(data);
        console.log(itemkeys);*/
});

}