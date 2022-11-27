function add(){
    
    let num1=parseInt(document.getElementById("num1").value)
    let num2=parseInt(document.getElementById("num2").value)
    let ans=num1+num2
    document.getElementById("ans").innerHTML+=ans
}
function sub(){
    let num1=parseInt(document.getElementById("num1").value)
    let num2=parseInt(document.getElementById("num2").value)
    let ans=num1-num2
    document.getElementById("ans").innerHTML+=ans
}
function mul(){
    let num1=parseInt(document.getElementById("num1").value)
    let num2=parseInt(document.getElementById("num2").value)
    let ans=num1*num2
    document.getElementById("ans").innerHTML+=ans
}
function div(){
    let num1=parseInt(document.getElementById("num1").value)
    let num2=parseInt(document.getElementById("num2").value)
    let ans=num1/num2
    document.getElementById("ans").innerHTML+=ans
}