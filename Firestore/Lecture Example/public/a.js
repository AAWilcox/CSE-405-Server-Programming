console.log('(1) a.js is running');

//Anonymous function - we want our function names, login and logout, to be
//scoped within this function definition (we don't want them in the global namespace)
(function() {

  //Global variable a
  window.a = {}

    /*
    * Function that we call, when the user clicks a button, to log in.
    * Sends login link to email
    */
    function sendEmailLoginLink() {
      //Turn off button so they can't send a link twice
      a_send_link_btn.disabled = true;

      var actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be whitelisted in the Firebase Console.
        url: window.location.href,  //The current URL
        // This must be true.
        handleCodeInApp: true,
      };

      const email = a_email.value;
      firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
      .then(function() {
        // The link was successfully sent. Inform the user.
        a_msg.innerText = "Login link sent to email";
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem('email', email);
      })
      .catch(function(error) {
        // Some error occurred, you can inspect the code: error.code
        console.log(error);
      });
    }

    /*
    * 1.) Function that gets called when user clicked the login link
    * in their email and logged in that way
    */
    function loginPageLoad() {
      //Get email from local storage
      let email = localStorage.getItem('email');
      //If no email is stored
      if(!email) {
        email = prompt('Please provide your email for confirmation');
      }
      //Complete login - Check the email
      firebase.auth().signInWithEmailLink(email, location.href)
      .then(function(result) {
        //Clear email from storage
        localStorage.removeItem('email');
        //Access new user
        //const user = result.user;
      })
      .catch(function(error) {
        //Some error occurred
        console.log(error);
      });
    }
      
    function logout() {
      //Disable logout button
      a_logout_btn.disable = true;
      firebase.auth().signOut().catch(function(error) {
        console.log(error);
      });
    }
      
    function authStateChanged(user) {
      if (user === null) { //2.) User is not signed in
        a_msg.innerHTML             = 'Logged out';
        a_logging_in.style.display  = "block";
        a_logged_in.style.display   = "none";
        a_send_link_btn.disabled     = false;
        //If a.logout is defined, call it as a function
        if (a.logout) a.logout();
      } else {            //3.) We have a current user, we are logged in
        a_msg.innerHTML             = 'Logged in';
        a_logged_in.style.display   = "block";
        a_logging_in.style.display  = "none";
        a_logout_btn.disabled        = false;
        //If a.login in defined, call it as a function
        if (a.login) a.login();
      }
    }

    /*
    * When the page loads, we are in one of three possibilities
    */
    document.addEventListener('DOMContentLoaded', () => {
      console.log('(3) dom content loaded');
      a_msg.innerText = 'Loaded';

      //Send email login link once the login button has been pressed
      a_send_link_btn.addEventListener('click', sendEmailLoginLink);
      a_logout_btn.addEventListener('click', logout);

      const auth = firebase.auth();

      auth.onAuthStateChanged(authStateChanged);

      //1.) Are we loading in from a login link?
      if(auth.isSignInWithEmailLink(window.location.href)){
        loginPageLoad();
      }
    });

}) ();

//firebase deploy - no longer locally hosting
//defer scripts run before the DOM content has been loaded