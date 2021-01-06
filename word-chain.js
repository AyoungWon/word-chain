(function(){
    var word = document.querySelector('.word');
    var form = document.querySelector('.answer-wrap');
    var answer = document.querySelector('.answer');
    var result = document.querySelector('.result');
   
   
   
    form.addEventListener('submit',function(e){
        e.preventDefault();
       if(word.textContent[word.textContent.length -1] === answer.value[0]){
           //딩동댕
           result.innerHTML = '딩동댕';
           word.innerHTML = answer.value;
           answer.value = '';
           answer.focus();
       } else{
           //땡
           result.innerHTML = '땡';
           answer.value = '';
           answer.focus();
       }
   
    })



})();

 