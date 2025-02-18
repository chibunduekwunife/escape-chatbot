import fs from 'fs/promises';


// readFile() - callback async version

// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log(err.message)
//     } else {
//         console.log(data)
//     }
// });

// readFileSync() - sync version

// const data = fs.readFileSync('../test.txt', 'utf8');
// console.log(data);

// fs.readFile('./test.txt', 'utf8')
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err.message));


const readFile = async () => {

    try {
        const data = await fs.readFile('./test.txt', 'utf8')
        console.log(data)

    } catch (err) {
        console.log(err.message)
    }
}


const writeFile = async () => {

    try {
        await fs.writeFile('./test.txt', 'Hello World')
        console.log('File written successfully')
    } catch( error) {
        console.log(error.message)
    }
}

const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', "\nI just got added, hello to you too!")
        console.log('File appended successfully')

    } catch (error) {
        console.log(error.message)
    }
}



const readFileRequests = async () => {
    try {
        const data = await fs.readFile('./requests.txt', 'utf8')
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}

readFileRequests();