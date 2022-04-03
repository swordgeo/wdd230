let index = 1;
let length = 3;
showSlide(index);

function showSlide(i) {
  
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  
  for (i = 0; i < length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index-1].style.display = "block";
  dots[index-1].className += " active";
}