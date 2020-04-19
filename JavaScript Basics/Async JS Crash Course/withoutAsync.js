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
    //Simulate waiting on a server
    setTimeout(() => {
        //Add new post onto posts array
        posts.push(post);
    }, 2000);   //Wait two seconds
}

getPosts();
createPost({title: 'Post Three', body: 'This is post three'});
/*Problem:
It takes only one second to get the posts and display them onto the document.
However, it takes two seconds to create a new post and add it onto our posts array.
By the time the posts are output onto the document, creating a new post
has not had enough time to execute, and so the third post does not get displayed
onto the document.
How can we fix this? --> Callbacks*/