import crypto from 'crypto';

// hash the text
const hash = crypto.createHash('sha256');
hash.update('Encrypt this text');
console.log(hash.digest('hex'));


// generate random bytes - useful for generating random tokens or user ids
crypto.randomBytes(16, (err, buf) => {
    if (err) throw err;
    console.log(buf.toString('hex'));
})

// encrypt and decrypt data
const algorithm = 'aes-192-cbc';
const key = crypto.randomBytes(24);
const iv = crypto.randomBytes(16);
const cipher = cry
const password = 'Password used to generate key';

