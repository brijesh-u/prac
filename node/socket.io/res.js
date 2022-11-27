const express=require('express')
const { Socket } = require('socket.io')
const app=express()
const http=require('http').createServer(app)
const io=require('socket.io')(http)

app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/res.html')
})

io.on('connection',(socket)=>{
    console.log(socket.id + "user is connected")
    socket.on('msg',()=>{
        socket.emit('res',"Welcome to node js class")
    })
})

http.listen(42069)