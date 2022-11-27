let zlib=require('zlib')
let fs=require('fs')
let zip=zlib.createGzip()

let inp=fs.createReadStream('./test.txt')
let otp=fs.createWriteStream('./new.txt.gz')
inp.pipe(zip).pipe(otp)