import express from 'express';
import posts from './express_routes/posts.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';
import logger from './middleware/logger.js';
const PORT = process.env.PORT || 8000;


const app = express();

// setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(logger);

// app uses the posts route with the /api/posts prefix
app.use('/api/posts', posts);


// Error Handlers
app.use(notFound);
app.use(errorHandler);



app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));