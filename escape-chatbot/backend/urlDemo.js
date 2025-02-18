import url from 'url';

const myUrl = new URL('https://www.google.com/search?q=hello+world');


const urlObj = new URL(myUrl)
console.log(urlObj)

//format() - URL to string

console.log(url.format(urlObj))

// import.meta.url - file URL

console.log(import.meta.url)

console.log(url.fileURLToPath(import.meta.url))

console.log(myUrl.search)

const params = new URLSearchParams(myUrl.search)
console.log(params)
console.log(params.get('q'))
params.append('limit', '5')
console.log(params)
params.delete('limit')
console.log(params)