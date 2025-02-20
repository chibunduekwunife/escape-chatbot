import express from 'express';
import path from 'path';
import posts from './express_routes/posts.js';
import logger from './middleware/logger.js';

const PORT = process.env.PORT || 8000;


const app = express();

// setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// app uses the posts route with the /api/posts prefix
app.use('/api/posts', posts);

// app level middleware
app.use(logger);



app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));