let express = require('express')
let app = express()
let http = require('http').createServer(app)
let io = require('socket.io')(http)

app.get('/', function(req, res){
    res.sendFile(__dirname + '/' + 'chat.html')
})

io.on('connection', function(socket){
    console.log('A user is connected')
    socket.on('createUser', function(data){
        console.log(data)
        socket.emit('setUser', {username: data})
        users.push(data)
    })
    socket.on('msg', function(data){
        io.emit('newmsg', data)
    })
})

http.listen(8000, function(){
    console.log('Listening on port: 8000')
})