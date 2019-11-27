var slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function youTubeAspect() {
  //will calculate the size of a youtube video so it fits the article box.
  var articleWidth = document.getElementsByClassName('toparticle')[0].offsetWidth - 40; //you have 20px padding, got to take 40px of total width.
  var videoHeight = (Math.floor(articleWidth / 16)*9);
  console.log(articleWidth);
  console.log(videoHeight);
  var youTubeVideos = document.getElementsByClassName("youTubeClip");
  for (i = 0; i < youTubeVideos.length; i++) {
    youTubeVideos[i].style.width = articleWidth+"px";
    youTubeVideos[i].style.height = videoHeight+"px";
}
}