document.getElementById('Whithdraw-id').addEventListener('click',function(){

    var inputvalue= document.getElementById('Whithdraw-input')
    var inputvaluefiding=parseFloat(inputvalue.value) 


   
    
    inputvalue.value=''
    if(isNaN(inputvaluefiding)){
        alert('plesae given a number because amount is just allow number')
        return;
    }

   var taka= document.getElementById('totalbalence')
    var takaf=parseFloat(taka.innerText);
     if(inputvaluefiding>takaf){
        alert('baba bank ato taka nai')
        return;
     }

     var Whithdraw_see=document.getElementById('withdraw-see');
     var withdrawText=parseFloat(Whithdraw_see.innerText) ;
     Whithdraw_see.innerText=inputvaluefiding
     var finalresult=inputvaluefiding+withdrawText
    Whithdraw_see.innerText=finalresult
  var  finalamount=takaf-inputvaluefiding
  taka.innerText=finalamount
    
})