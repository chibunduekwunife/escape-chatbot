import { createServer } from 'http';
import { json } from 'stream/consumers';
import fs from 'fs/promises'
import { EventEmitter } from 'stream';

const PORT = process.env.PORT || 5000;
const myEmitter = new EventEmitter();

//should come from database - hardcoded for now

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
];


//error handler
// myEmitter.on('error', (err, req, res) => {
//     res.writeHead(404, { 'Content-Type' : 'text/html' });
//     res.end(`<h1>404 Not Found</h1> <p>${err.message}</p>`);
// })

//logger middleware

const logger = (req, res, next) => {
   
    writeToFile(req.method, req.url)
    console.log(readFile());
    next();
}

// JSON middleware

const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    next();
}

// Route handler for GET /api/Users

const getUsersHandler = (req, res) => {
    res.write(JSON.stringify(users))
    res.end();
}

// Route handler for GET /api/Users/:id

const getUsersByIdHandler = (req, res) => {
    const id = req.url.split('/')[3]; 
    const user = users.find((user) => user.id === parseInt(id));

    if (user) {
        res.write(JSON.stringify(user))
    } else {
        res.statusCode = 404;
        res.write(JSON.stringify({message: 'User not found'}));
        throw new Error('User not found');
    }
    
    res.end();
}

// Not Found Handler 404
const notFoundHandler = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({message: 'Route not found'}));
    res.end();
    throw new Error('Route not found');
}

// Route handler for POST /api/Users
const createUserHandler = (req, res) => {
    let body = '';
    //listen for data
    req.on('data', (chunk) => {
        body += chunk.toString();
    })
    req.on('end', () => {
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = 201;
        res.write(JSON.stringify(newUser));
        res.end();
    })
}


// write File to store method and url

const writeToFile = async (method, url) => {
    try {
        await fs.appendFile('requests.txt', `${method} ${url}\n`)
    } catch (err) {
        console.error(err.message)
    }
}

const readFile = async () => {
    try {
        const data = fs.readFile('requests.txt', 'utf-8')
        return data
    } catch (err) {
        console.error(err.message)
    }
    
}
    


const server = createServer((req, res) => {

    logger(req, res, () => {

        try {

            jsonMiddleware(req, res, () => {

                if (req.method === 'GET') {

                    if (req.url === '/api/Users'){
                        getUsersHandler(req, res);
                    } else if (req.url.match(/\/api\/Users\/\d+/)) {
                        getUsersByIdHandler(req, res);
                    } else {
                        notFoundHandler(req, res);
                    }
                } else if (req.method === 'POST') {

                    if (req.url === '/api/Users') {
                        createUserHandler(req, res);
                    }
                }
            })
            
    
        } catch (err) {
            // myEmitter.emit('error', err, req, res);
            res.writeHead(404, { 'Content-Type' : 'text/html' });
            res.end(`<h1>404 Not Found</h1> <p>${err.message}</p>`);
        }
    })

    

})

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})