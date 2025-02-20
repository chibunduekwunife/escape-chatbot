import express from 'express';
const router = express.Router()


let posts = [
    {id: 1, title: "Post 1", body: "This is post 1"},
    {id: 2, title: "Post 2", body: "This is post 2"},
    {id: 3, title: "Post 3", body: "This is post 3"},
    {id: 4, title: "Post 4", body: "This is post 4"},
    {id: 5, title: "Post 5", body: "This is post 5"},
]


//middleware
// const logger = (req, res, next) => {
//     console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
//     next();
//     //add as second argument to the route
// }


//Routes

//get all posts

router.get('/', (req, res) => {

    const limit = parseInt(req.query.limit);

    if(!isNaN(limit) && limit > 0){
        return res.status(200).json(posts.slice(0, limit));
    } 

    res.status(200).json(posts);
    
})


// get single post
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        //if not in scope of the db, return 404
        return res.status(404).json({msg: `Post with the id of ${id} Not Found`})
    } 
    
    res.status(200).json(post);
})


// create post
router.post('/', (req, res) => {
    
    const {title, body} = req.body;

    const newPost = {
        id: posts.length + 1,
        title: title,
        body: body
    }

    if (!newPost.title || !newPost.body) {
        return res.status(400).json({msg: 'Please include a body and title in the request'})
    }


    posts.push(newPost)
    res.status(201).json(posts);
})

// update post
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        return res.status(404).json({msg: `Post with the id of ${id} Not Found`})
    }

    post.title = req.body.title;
    post.body = req.body.body;

    //will include the updated post
    res.status(200).json(posts)

} )

// delete post
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        return res.status(404).json({msg: `Post with the id of ${id} Not Found`})
    }

    posts = posts.filter(post => post.id !== id);
    res.status(200).json(posts)
})

export default router;