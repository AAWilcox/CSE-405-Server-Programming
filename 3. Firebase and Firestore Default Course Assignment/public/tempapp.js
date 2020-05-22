    //Render contact list/display data
    function renderList(doc, user) {
        //Create new elements
        const li = document.createElement('li');
        const name = document.createElement('span');
        const phone = document.createElement('span');
        const deleteBtn = document.createElement('button');

        //Keep track of document Id
        li.setAttribute("data-id", doc.id);
        //Populate text
        name.textContent = doc.data().name;
        phone.textContent = doc.data().phone;
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
            //e.target.parentElement.dataset.id
            //Delete document from database
            //userContactsRef.doc(id).delete();
            //db.collection('contacts').doc(id).delete();
            const contacts = firebase.firestore().collection('users').doc(user.uid)
            .collection('contacts');
            contacts.doc(id).delete();
        });
    }