//index.js
document.addEventListener('DOMContentLoaded', () => {

    registerButton = document.getElementById("register_submit_button");
    registerButton.addEventListener('click', (e) => {
        e.preventDefault();
        const email = register_email.value;
        //console.log(email);
        const password = register_password.value;
        //console.log(password);

        if(email === "" || email === null) {
            alert("Please enter a valid email");
        }
        else if(password === "" || password === null) {
            alert("Please enter a valid password");
        }
    });
});