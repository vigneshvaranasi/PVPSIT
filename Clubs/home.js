
/* Explore Now JS Start */

function smoothScrolls(target) {
    const targetElement = document.querySelector(target);
    if (targetElement) 
    {
        const targetPosition = targetElement.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 800; 
        let start = null;
        
        function step(timestamp) 
        {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
          if (progress < duration) {
            window.requestAnimationFrame(step);
          }
        }
        
        function easeInOutCubic(t, b, c, d) {
          t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
          }

        window.requestAnimationFrame(step);
    }
}

/* Explore Now JS End */

/* Menu in Phone View Start */
function toggleMenu() {
  var sideMenu = document.querySelector('.side-menu');
  sideMenu.classList.toggle('menu-open');
}
/* Menu in Phone View end */

/* About Code Start */

function smoothScroll(target) {
  var targetElement = document.querySelector(target);
  if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
  }
}

document.querySelector('.about').addEventListener('click', function (event) {
  event.preventDefault();
  smoothScroll(this.getAttribute('href'));
});

/* About Code End */
// Create a list of slides
const slides = document.querySelectorAll(".slide");

// Set the current slide index
let currentSlideIndex = 0;

// Add event listeners to the buttons
document.querySelector(".prev").addEventListener("click", function() {
  showSlide(currentSlideIndex - 1);
});

document.querySelector(".next").addEventListener("click", function() {
  showSlide(currentSlideIndex + 1);
});

function showSlide(index) {
  // Check if the index is within bounds
  if (index < 0) {
    currentSlideIndex = slides.length - 1;
  } else if (index >= slides.length) {
    currentSlideIndex = 0;
  } else {
    currentSlideIndex = index;
  }

  // Show or hide the arrows based on the current slide index
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  if (currentSlideIndex === 0) {
    prevButton.style.display = "none";
  } else {
    prevButton.style.display = "block";
  }
  if (currentSlideIndex === slides.length - 1) {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "block";
  }

  // Scroll to the slide
  slides[currentSlideIndex].scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "start"
  });
}

// Start the carousel
setInterval(function() {
  showSlide(currentSlideIndex + 1);
}, 5000);
