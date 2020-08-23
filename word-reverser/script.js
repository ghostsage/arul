function ReverseString(str) { 
    return str.split('').reverse().join('') 
   }     
   function main(){
       var x=document.getElementById('myText').value;
       var y=ReverseString(x)
       document.getElementById('demo').innerHTML='Your answer is: '+y;
   } 