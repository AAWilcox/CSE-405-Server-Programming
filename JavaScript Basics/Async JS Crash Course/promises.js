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

//Once createPost resolves, then it will call getPosts
createPost({ title: 'Post Three', body: 'This is post three'})
.then(getPosts)
.catch(err => console.log(err));    //If reject is called

// =-=-=-=-=-=-=-= Promise.all =-=-=-=-=-=-=-=

//Different ways to create promises
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Goodbye');
});
//Need .then to format JSON data correctly
//fetch returns a promise
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

//Promise.all takes in an array of promises
Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
{
    console.log(values);
});