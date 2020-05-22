(function() {

    //Select list
    const contactList = document.querySelector('#contact_list');
    //Select contact form
    const contactForm = document.querySelector('#contact_form');

    //Login event
    auth.loginEvent = function() {
        console.log("Login event");
        people.style.display = "block";
        //User Id
        window.userId = firebase.auth().currentUser.uid;
        //Reference to contacts collection
        window.contactsRef = firebase.firestore().collection('users')
        .doc(window.userId).collection('contacts');
        //window.contacts = contactsRef;
        
        //Get data from database - supports real-time listener
        window.contactsRef.orderBy('name').onSnapshot(snapshot => {
            //Clear ul
            while(contactList.firstChild){
            contactList.removeChild(contactList.firstChild);
            }
            //Get contacts stored in document
            snapshot.docs.forEach(doc => {
                renderList(doc, window.contactsRef);
            });
        }, error => console.log(error.message));
    }

    document.addEventListener('DOMContentLoaded', () => {
        //Saving data
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            window.contactsRef.add({
                name:   contactForm.name.value,
                phone:  contactForm.phone_number.value
            }).then(() => {
                //Clear form
                contactForm.reset();
            })
            .catch(function(error) {
                //Handle errors here
                console.log(error);
                const errorCode     = error.code;
                const errorMessage  = error.message;
            });
        });
    });

    //Render contact list/display data
    function renderList(doc, contactsRef) {
        //Create new elements
        const li            = document.createElement('li');
        const name          = document.createElement('span');
        const phone         = document.createElement('span');
        const deleteBtn     = document.createElement('button');

        //Keep track of document Id
        li.setAttribute("data-id", doc.id);
        //Populate text
        name.textContent    = doc.data().name;
        phone.textContent   = doc.data().phone;
        deleteBtn.appendChild(document.createTextNode('X'));

        //Append data to li
        li.appendChild(name);
        li.appendChild(phone);
        li.appendChild(deleteBtn);

        //Append li to list
        contactList.appendChild(li);

        //Listen for deletion event
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            //Get id of contact we want to delete (document id)
            const id = e.target.parentElement.getAttribute("data-id");
            //Delete document from database
            contactsRef.doc(id).delete();
        });
    }

    //Logout event
    auth.logoutEvent = function() {
        console.log("Logout event");
        people.style.display = "none";    
    }

}) ();