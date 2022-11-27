const http=require('http')
http.createServer((req,res)=>{
    res.writeHead(201, {'Content-Type': 'text/html'});
    res.write("hi")
    res.end()
}).listen(42069)