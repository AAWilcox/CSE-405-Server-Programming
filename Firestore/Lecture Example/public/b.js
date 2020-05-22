//a.js will run before b.js

(function() {
    //Informed when there is a login event
    a.login = function() {
        console.log("login");
        //View b_view
        b_view.style.display = "block";
        //Enable edit button
        b_view_edit_btn.disabled = false;

        //Get user Id
        const userId = firebase.auth().currentUser.uid;
        //Look at collection called "users". Reference to doc in there
        //that has a name equal to the userId
        //Acts as a pointer to something that may or may not exist in the database
        const userRef = firebase.firestore().collection("users").doc(userId);

        //snapshot = current state
        //onSnapshot = when referred to document, when our reference userRef
        //becomes available or changes, then the callback function will
        //be called (function(snapshot))
        userRef.onSnapshot(function(snapshot) {
            //If snapshot exists (document exists)
            if(snapshot.exists) {
                //Access the data in the document
                b_view_note.innerText = snapshot.data().note;
            } 
            //If snapshot doesn't exist (there is no document)
            else {
                //Create user object with one attribute (note)
                //note is set to a string
                userRef.set({ note: "Enter Note Here" });
            }
            b_edit_note.value = b_view_note.innerText;
        });
    }

    //Informed when there is a logout event
    a.logout = function() {
        console.log("logout");
    }


    document.addEventListener("DOMContentLoaded", () => {
        //When click edit button
        b_view_edit_btn.addEventListener('click', function() {
            b_view_edit_btn.disabled = true;
            b_view.style.display = "none";
            b_edit.style.display = "block";
            b_edit_save_btn.disbaled = false;
            b_edit_cancel_btn.disabled = false;
        });

        //Save button is clicked
        b_edit_save_btn.addEventListener('click', function() {
            b_view_edit_btn.disabled = false;
            b_view.style.display = "block";
            b_edit.style.display = "none";
            b_edit_save_btn.disbaled = true;
            b_edit_cancel_btn.disabled = true;

            //Save data to the database
            //Get user id
            const userId = firebase.auth().currentUser.uid;
            //Create reference to user document
            const userRef = firebase.firestore().collection("users").doc(userId);
            //Update the note
            userRef.update({ note: b_edit_note.value});

        });

        //Cancel button is clicked
        b_edit_cancel_btn.addEventListener('click', function() {
            b_view_edit_btn.disabled = false;
            b_view.style.display = "block";
            b_edit.style.display = "none";
            b_edit_save_btn.disbaled = true;
            b_edit_cancel_btn.disabled = true;
        })
        

    })
}) ();

//firebase emulators:start to start emulator
//OR firebase serve