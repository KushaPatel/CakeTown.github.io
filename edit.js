/*LOGIN*/
/*const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});*/

/*add to cart*/

/*slider*/
var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide(){
  if(index<0){
    index = slides.length-1;
  }
  if(index>slides.length-1){
    index = 0;
  }
  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
    dot[i].classList.remove("active");
  }
  slides[index].style.display= "block";
  dot[index].classList.add("active");
  index++;
  setTimeout(changeSlide,2000);
}
changeSlide();