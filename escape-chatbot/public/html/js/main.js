const output = document.querySelector('#output');
const button = document.querySelector('#get-posts-btn')
const form = document.querySelector('#add-post-form')


// Get and show posts

async function showPosts() {

    try {
        // fetch posts from our API
        const res = await fetch('http://localhost:5000/api/posts')

        if (!res.ok){
            throw new Error('Error fetching posts');
        }

        const posts = await res.json();
        output.innerHTML = '';

        posts.forEach((post) => {
            //create an element for each post
            const postEl = document.createElement('div')
            postEl.textContent = post.title + ': ' + post.body;
            output.appendChild(postEl)
        })

    } catch (error) {
        console.log('Error fetching posts: ', error)
    }
}

// Add a post
async function addPost(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const title = formData.get('title');
    const body = formData.get('body');

    try {
        const res = await fetch('http://localhost:5000/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, body})
        })

        if (!res.ok) {
            throw new Error('Failed to add post')
        }

        const newPost = await res.json();

        const postEl = document.createElement('div');
        postEl.textContent = newPost.title + ': ' + newPost.body;
        output.appendChild(postEl);
        showPosts();

    } catch (error) {
        console.error('Error adding post: ', error)
    }
}

// Event listeners
button.addEventListener('click', showPosts)
form.addEventListener('submit', addPost)