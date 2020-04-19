//Array that holds blog posts
const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'}
];

//Get blog posts from a server
function getPosts() {
    //Simulate waiting on a server
    setTimeout(() => {
        let output = '';
        //Loop through posts, get the titles
        posts.forEach(post => {
            output += `<li>${post.title}</li>`;
        });
        //Insert titles into the body
        document.body.innerHTML = output;
    }, 1000);   //Wait one second
}

//Add new posts onto posts array
function createPost(post) {
    //Resolve: resolve problem successfully
    //Reject: if error occurs, call reject
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;
            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

// =-=-=-=-=-=-=-= Async / Await =-=-=-=-=-=-=-=

//Must include "async"
async function init() {
    //Wait for createPost to be done before continuing
    await createPost({ title: 'Post Three', body: 'This is post three'});

    getPosts();
}

init();

// =-=-=-=-=-=-=-= Async / Await with Fetch =-=-=-=-=-=-=-=

async function fetchUsers() {
    //fetch returns a promise
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();
    console.log(data);
}

fetchUsers();