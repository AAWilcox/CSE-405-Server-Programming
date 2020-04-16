const myForm = document.querySelector('#myForm');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault(); //On submit
    console.log(nameInput.value);   //Get the name inputted

    //Input validation
    //Makes sure that both name and email are filled out
    if(nameInput.value === '' || emailInput.value === '') {
        //alert('Please enter fields'); - Can use, not pretty though
        
        //Adds css error class to msg
        msg.classList.add('error');
        //Display message
        msg.innerHTML = 'Please enter all fields';

        //Will remove error message after 3 seconds
        setTimeout(() => msg.remove(), 3000);
    } else {
        //Add input to an unordered list
        //Create new li element
        const li = document.createElement('li');
        //Attach name and email to that element
        li.appendChild(document.createTextNode(`${nameInput.value}
        : ${emailInput.value}`));
        //Attach element to userList
        userList.appendChild(li);

        //Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }

}