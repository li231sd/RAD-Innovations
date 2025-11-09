// Scroll-based animation JS for RAD Innovations
// Adds 'fade-in' or 'slide-up' classes when elements enter viewport

document.addEventListener('DOMContentLoaded', function () {
  const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .section-animate');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-active');
      }
    });
  }, {
    threshold: 0.15
  });

  animatedElements.forEach((el) => {
    observer.observe(el);
  });
});

// Add .animate-active to trigger animation only when in view
// In animations.css, add:
// .fade-in.animate-active, .slide-up.animate-active, .section-animate.animate-active { animation-play-state: running; }
// .fade-in, .slide-up, .section-animate { animation-play-state: paused; }
