'use strict';
(function(){
  const tableContent = document.querySelectorAll('.cell');

  let result = document.getElementById('result');
   console.log(result);

      for(let elem of tableContent) {
          elem.addEventListener('click', function(){
          result.innerHTML = elem.textContent;
      },false)
    }  
}());


(function(){

   window.onscroll = function() {
      scrollFunc()
   };

   function scrollFunc(){
      let btn = document.getElementById('btn');

      if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          btn.style.display = 'block';
      } else {
          btn.style.display = 'none';
      }
   }

function toTop(){
    document.body.scrollTop = 0; //Safari
    document.documentElement.scrollTop = 0; // Other Browsers
}

let btnEventTop = document.getElementById('btn');
btnEventTop.addEventListener('click', toTop, false);

}());


(function() {
    const f = (i1, i2) => {

     const synchronize = (event) => {
         i2.value = event.target.value;
     }

       i1.addEventListener('input', synchronize);
     }

f(document.getElementsByTagName('input')[0], document.getElementsByTagName('input')[1]);

}());



