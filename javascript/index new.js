// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
 // Rotating Images in Each Grid Item
const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(gridItem => {
  let currentIndex = 0;
  const images = gridItem.querySelectorAll('img');
  const totalImages = images.length;

  // Function to rotate images within a single grid item
  function rotateImages() {
    // Set all images to invisible
    images.forEach((img, index) => {
      img.style.opacity = '0';
    });

    // Show the next image
    images[currentIndex].style.opacity = '1';
    
    // Move to the next image, or loop back to the first one
    currentIndex = (currentIndex + 1) % totalImages;
  }

  // Rotate every 3 seconds
  setInterval(rotateImages, 3000);
});


  
  // Optional: Simple fade-in animation on scroll
  const faders = document.querySelectorAll('.mv-box');
  
  const appearOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    });
  }, appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
  