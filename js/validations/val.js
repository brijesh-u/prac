//val_1
// var form = document.getElementById('formm')
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//    var vali =  validate();
 
// })
function validate()
{
    var name = document.getElementById('nam').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pwd').value;
    var cpass = document.getElementById('cpwd').value;
    var phone = document.getElementById('pno').value;

    //validation//
    if(name.length >5)
    {
        if(pass == cpass)
        {
           if(email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
           {
            if(phone.length==10)
            {
                 alert('validation sucess');
            }
            else{
                alert('Phone number should be 10 digit')
            }

           }
           else{
            alert('email invalid')
           }
        }
        else{
            alert('pass and cpass are not same...');
        }
    }
    else{
         alert('name should be more than 5 letter');
    }

};