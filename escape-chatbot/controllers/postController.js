
// where we handle all the requests for the posts route

let posts = [
    {id: 1, title: "Post 1", body: "This is post 1"},
    {id: 2, title: "Post 2", body: "This is post 2"},
    {id: 3, title: "Post 3", body: "This is post 3"},
    {id: 4, title: "Post 4", body: "This is post 4"},
    {id: 5, title: "Post 5", body: "This is post 5"},
]

// @desc   Get all posts
// @route  GET /api/posts
// @access Public

export const getPosts = (req, res) => {

    const limit = parseInt(req.query.limit);

    if(!isNaN(limit) && limit > 0){
        return res.status(200).json(posts.slice(0, limit));
    } 

    res.status(200).json(posts);
    
}

// @desc   Get single post
// @route  GET /api/posts/:id
// @access Public

export const getPost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        //if not in scope of the db, return 404
        const err = new Error(`Post with the id of ${id} Not Found`);
        err.status = 406;
        return next(err);
    } 
    
    res.status(200).json(post);
}

// @desc   Create a post
// @route  POST /api/posts
// @access Public

export const createPost = (req, res, next) => {
    
    const {title, body} = req.body;

    const newPost = {
        id: posts.length + 1,
        title: title,
        body: body
    }

    if (!newPost.title || !newPost.body) {
        const err = new Error('Please include a body and title in the request');
        err.status = 400;
        return next(err);
    }


    posts.push(newPost)
    res.status(201).json(posts);
}

// @desc   Update a post
// @route  PUT /api/posts/:id
// @access Public

export const updatePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        const err = new Error(`Post with the id of ${id} Not Found`);
        err.status = 404;
        return next(err);
    }

    post.title = req.body.title;
    post.body = req.body.body;

    //will include the updated post
    res.status(200).json(posts)

}

// @desc   Delete a post
// @route  DELETE /api/posts/:id
// @access Public

export const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        const err = new Error(`Post with the id of ${id} Not Found`);
        err.status = 404;
        return next(err);
    }

    posts = posts.filter(post => post.id !== id);
    res.status(200).json(posts)
}