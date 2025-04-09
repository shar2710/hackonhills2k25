const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let currentIndex = 0;

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width + 20;
  const containerWidth = track.parentElement.offsetWidth;
  const offset = slideWidth * currentIndex - (containerWidth - slideWidth) / 2;
  track.style.transform = `translateX(-${offset}px)`;
}

function goToNext() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}

function goToPrev() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
}

nextBtn.addEventListener('click', () => {
  goToNext();
  resetAutoplay();
});

prevBtn.addEventListener('click', () => {
  goToPrev();
  resetAutoplay();
});

function resetAutoplay() {
  clearInterval(autoPlay);
  autoPlay = setInterval(goToNext, 2500);
}

let autoPlay = setInterval(goToNext, 2500);

window.addEventListener('load', () => {
  updateCarousel();
});

window.addEventListener('resize', () => {
  updateCarousel();
});
