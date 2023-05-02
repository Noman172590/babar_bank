document.getElementById('deposit').addEventListener('click',function(){

        var deposit=document.getElementById('deposit-id')
        var depositvalue=parseFloat(deposit.value)
        console.log(depositvalue)

        var addbalence=document.getElementById('depositbal')
        var previoustotal=parseFloat(addbalence.innerText);
        var result=previoustotal+depositvalue;
        addbalence.innerText=result;
        var addbalence1=document.getElementById('totalbalence')
        var previoustotal1=parseFloat(addbalence1.innerText);
        var result1=result+previoustotal1;
        addbalence1.innerText=result1;
        
        deposit.value=''
      
        


})

