//entry point for the application

import http from "http"; //use http module to create a server
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

const PORT = process.env.PORT || 5000; //set port to 5000 or use the port provided by the environment
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const server = http.createServer((req, res) => {

  let filePath;

  if (req.url === "/") {
    
    filePath = path.join(__dirname, 'dev.html');

  } else if (req.url === '/about'){
    
  } else {
    throw new Error('Page not found')
  }
});

server.listen(PORT, () => {
  try {
    console.log(`Server running on port ${PORT}`);
  } catch (err) {
    console.error("Error:", err.message);
  }
});
