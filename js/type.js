document.addEventListener("DOMContentLoaded", function () {
    const text = "NIT Hamirpur"; // Text to type
    const speed = 150; // Typing speed
    const backSpeed = 100; // Backspacing speed
    const delay = 1000; // Delay before backspacing
    let index = 0;
    let isDeleting = false;
    const dateElement = document.querySelector(".date");
  
    function typeEffect() {
      if (!isDeleting && index < text.length) {
        dateElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
      } else if (isDeleting && index > 0) {
        dateElement.innerHTML = text.substring(0, index - 1);
        index--;
        setTimeout(typeEffect, backSpeed);
      } else {
        isDeleting = !isDeleting; // Toggle deleting state
        setTimeout(typeEffect, delay); // Pause before switching
      }
    }
  
    typeEffect(); // Start the loop
  });
  