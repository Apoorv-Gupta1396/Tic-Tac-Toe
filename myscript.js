var headOne = document.querySelector('#one');
var headTwo = document.getElementById('two');
var headThree = document.getElementById('three');
one = headOne.textContent;

headOne.addEventListener('mouseover',function(){
  headOne.textContent ="MouseOver Works!";
  headOne.style.color = "red";
})

headOne.addEventListener("mouseout",function(){
    headOne.textContent =one;
    headOne.style.color = "black"
})

headTwo.addEventListener('click',function(){
  headTwo.textContent = "I was Clicked";
  headTwo.style.color = "green"
})

headThree.addEventListener('dblclick',function(){
  headThree.textContent = "I was double clicked";
  headThree.style.color = "blue"
})
