const auth = firebase.auth();
const db = firebase.firestore();
const contactList = document.querySelector('#contact_list');
const contactForm = document.querySelector('#contact_form');

function authStateChanged(user) {
    if(user) {
        register.style.display = "none";
        LogIn.style.display = "none";
        logout_btn.style.display = "block";
        people.style.display = "block";
        console.log(user.uid);
        const contacts = firebase.firestore().collection('users').doc(user.uid)
        .collection('contacts');
        window.userId = user.uid;
        //db.collection('contacts')
        contacts.onSnapshot(snapshot => {
            while(contactList.firstChild){
                contactList.removeChild(contactList.firstChild);
                }
                snapshot.docs.forEach(doc => {
                    renderList(doc, user);
                });
        });
        
        //if(auth.login) console.log("No login event");
        //else auth.loginEvent();
    }
    else {
        register.style.display = "block";
        LogIn.style.display = "block";
        logout_btn.style.display = "none";
        people.style.display = "none"; 
        //if(auth.logout) console.log("No logout event");
        //else auth.logoutEvent();
    }
}

 //Saving data
 contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const contacts = firebase.firestore().collection('users').doc(window.userId)
        .collection('contacts');
    //Add data to contacts collection
    //db.collection('contacts')
    contacts.add({
        name: contactForm.name.value,
        phone: contactForm.phone_number.value
    }).then(() => {
        //Clear form
        contactForm.reset();
    });
});

//Global variable
//window.auth = {};

function Register(e) {
    e.preventDefault();
    //Get values
    const email = register_email.value;
    const password = register_password.value;

    //Clear form
    register_form.reset();

    //Create user
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(cred => {
        //window.userId = cred.user.uid;
        return db.collection('users').doc(cred.user.uid).set({
            email: email
        });
    })
    .then(() => {
        console.log("User successfully registered");
        console.log(userId);
    })
    .catch(function(error) {
        //Handle errors here
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}

function Login(e) {
    e.preventDefault();
    //Get values
    const email = login_email.value;
    const password = login_password.value;

    //Clear form
    login_form.reset();

    //Sign user in
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(user) {
        console.log("User successfully logged in");
        console.log(user);
    }).catch(function(error) {
        //Handle errors here
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}

function Logout(e) {
    e.preventDefault();
    //Sign user out
    firebase.auth().signOut();
}

document.addEventListener('DOMContentLoaded', () => {
    //Register button is clicked
    register_submit_button.addEventListener('click', Register);

    //Log In button is clicked
    login_submit_button.addEventListener('click', Login);

    //Log Out button is clicked
    logout_btn.addEventListener('click', Logout);

    const auth = firebase.auth();
    auth.onAuthStateChanged(authStateChanged);
});