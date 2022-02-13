const pictures = document.querySelectorAll("img[data-src]");

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 0px 0px"
};

const loadImages = (image) => {
  const src = image.getAttribute("data-src");
  if(!src) {return;}

  image.src = src;
  image.onload = () => {image.removeAttribute("data-src");};
};

if('IntersectionObserver' in window) {
  const imgObserver = new IntersectionObserver((images, imgObserver) => {
    images.forEach((image) => {
      if (!image.isIntersecting) {return;}
      else {
        loadImages(image.target);
        imgObserver.unobserve(entry.target);
      }
    });
  }, imgOptions);

  pictures.forEach((img) => {
    imgObserver.observe(img);
  });
}
else {
  pictures.forEach((img) => {
    loadImages(img);
  });
}



//dates
const yearDisplay = document.querySelector('footer h2');
var today = new Date();
var todayYear = today.getFullYear();
//copyright
yearDisplay.innerHTML = `&copy; ${todayYear} - George Blanchard - Indiana`;
//modDate
const modDateDisplay = document.getElementById('modDate');
let modDate = document.lastModified;
modDateDisplay.textContent = ("Last modified "+modDate);