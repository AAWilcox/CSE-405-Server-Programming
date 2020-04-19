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
function createPost(post, callback) {
    //Simulate waiting on a server
    setTimeout(() => {
        //Add new post onto posts array
        posts.push(post);
        callback();
    }, 2000);   //Wait two seconds
}

//First it will create a post, then it will go to getPosts
createPost({title: 'Post Three', body: 'This is post three'}, getPosts);