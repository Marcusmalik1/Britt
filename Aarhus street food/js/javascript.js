const images = document.querySelectorAll('.skolegaard img');

function fadeInOnScroll() {
  images.forEach(image => {
    const container = image.parentElement;
    const containerTop = container.getBoundingClientRect().top;
    const containerBottom = container.getBoundingClientRect().bottom;
    const viewportHeight = window.innerHeight;


    if (containerTop < viewportHeight && containerBottom >= 0) {
      image.classList.add('fade-in');
    }
  });

  
}

window.addEventListener('scroll', fadeInOnScroll);



  
var parallaxElements = document.querySelectorAll('.parallax');
var parallaxText = document.querySelector('.parallax-text');

window.addEventListener('scroll', function () {
  var scrollPosition = window.pageYOffset;

  parallaxElements.forEach(function (element, index) {
    var speed = index + 0.2;
    var position = -scrollPosition * speed * 0.2;
    element.style.transform = 'translateY(' + position + 'px)';
  });
  parallaxText.style.transform = 'translateY(' + scrollPosition * 0.2 + 'px)';
});
