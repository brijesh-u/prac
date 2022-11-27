let str="hi this is node js class"
let buff=Buffer.alloc(str.length)
buff.fill(str)
console.log(buff.toString('utf-8',0,5))
console.log(buff.toString('utf-8',str.length-3,str.length))