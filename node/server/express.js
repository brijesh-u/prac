const express=require('express')
const app=express()

app.use(express.urlencoded({extended:false}))

app.get('/',(req, res, next)=>{
    res.sendFile(__dirname+ '/express.html') 
})
app.post('/',(req,res)=>{
    let msg = req.body.msg
    res.send(msg)
})

app.listen(42069,(err)=>{
    if(err) console.log("error")
    else console.log("server running on port 42069")
})