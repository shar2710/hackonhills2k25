const carousel = document.querySelector(".frame3 .gallery .carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < carousel.children.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

function updateCarousel() {
  const width = carousel.children[0].clientWidth;
  const carouselWidth = carousel.clientWidth;
  const offset = (carouselWidth - width) / 2;
  carousel.style.transform = `translateX(-${currentIndex * (width + 30) - offset}px)`; // Adjusted for margin and centering

  // Remove active class from all images
  Array.from(carousel.children).forEach((img) =>
    img.classList.remove("active")
  );

  // Add active class to the current image
  carousel.children[currentIndex].classList.add("active");
}

// Initialize the first image as active
carousel.children[currentIndex].classList.add("active");

// Automatic sliding
function autoSlide() {
  currentIndex = (currentIndex + 1) % carousel.children.length;
  updateCarousel();
}

setInterval(autoSlide, 3000); 