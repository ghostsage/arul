function random(array){
    return array[Math.floor(Math.random()*array.lenght)];
}
let sentences =['The quick brown fox jumps over the lazy dog','tHE QUICK BROWN FOX JUMPS OVER THE LAZY DOG','The Quick Brown Fox Jumps Over The Lazy Dog'];
let sentence = random(sentences);
document.getElementById('sentence').innerHTML=sentence;
document.getElementById('text').onclick=function(){
    var start = new Date().getTime();
    document.getElementById('submit').onclick=function(){
        if(document.getElementById('text').value==sentence){
            var end = new Date().getTime();
            var time=(end-start)/1000;
            document.getElementById('result').innerHTML=time+'s';
        }
        else{
            alert('You have done something wrong!')
        }
    }
}
