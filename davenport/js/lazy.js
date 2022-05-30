const pictures = document.querySelectorAll("img[data-src]");

const options = {
  //keeping margin to show it doing its thing
  rootMargin: "0px 0px 100px 0px",
  threshold: 0
};

const loadImages = (image) => {
  const src = image.getAttribute("data-src");
  if(!src) {return;}
  image.src = src;
  image.onload = () => {image.removeAttribute("data-src");};
};

if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((images, observer) => {
    images.forEach((image) => {
      if (!image.isIntersecting) {return;}
      else {
        loadImages(image.target);
        observer.unobserve(image.target);
      }
    });
  }, options);
  pictures.forEach((img) => {
    observer.observe(img);
  });
}
else {
  pictures.forEach((img) => {
    loadImages(img);
  });
}