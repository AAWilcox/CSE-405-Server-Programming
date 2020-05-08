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

        //User is signed in
        if (user) {
          console.log(user);
          //To-Do
          todoSubmitButton.addEventListener('click', (e) => {
              e.preventDefault();

              //Get to-do form value
              const todo = todo_text.value;

              //Make database ref
              //User user's uid to save their to-dos
              firebase.database().ref("/users/" + user.uid).child("/todos").push(todo);

              //Clear form
              document.getElementById("todo_form").reset();
          });

        } 
        //No user is signed in
        else {
          console.log("no user");
        }
    });

//uid: firebase creates a unique uid for each user
});