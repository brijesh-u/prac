const express=require('express')
const app=express()

app.use(express.urlencoded({extended:false}))
let ans
const add= (req,res,next)=>{
    let num =req.body.num
    num=parseInt(num)
    num++
    req.body.num = num
    next()
}

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/middle.html')
})
app.post('/path',add,(req, res)=>{
    ans=req.body.num
    res.redirect('/ans')
})
app.get('/ans',(req,res)=>{
    res.send(''+ans)
})

app.listen(42069,(err)=>{
    if(err){
        console.log("error")
    }
})