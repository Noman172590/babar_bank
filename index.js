document.getElementById('btn1').addEventListener('click',function(){
   
        var em=document.getElementById('e');
        var email=em.value;
        console.log(email)
        var pas=document.getElementById('p');
        var password=pas.value;
        console.log(password)
        if(email==='noman' && password==='123')
        {
            window.location.href = "other.html";
        }
        else{
            alert('to amon kno ray password volay jas')
        }


})