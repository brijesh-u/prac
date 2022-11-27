const fs= require('fs');
//reading 
let data=fs.readFileSync('./demo.txt')
console.log(data.toString())
//writing
if(data.length==0)console.log("file empty")
else{
fs.writeFileSync('./new.txt',data)
fs.unlinkSync('./demo.txt')
}