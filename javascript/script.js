let slideIndex = 0;
showSlides();

// Function to show slides automatically
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slideIndex++;

  // If the slide index is greater than the number of slides, reset to 1
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Remove the active class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and activate the corresponding dot
  slides[slideIndex - 1].style.display = "block";  
  dots[slideIndex - 1].className += " active";

  // Change slide every 5 seconds
  setTimeout(showSlides, 5000);
}

// Function to go to next/previous slide
function plusSlides(n) {
  showSpecificSlide(slideIndex += n);
}

// Function to go to a specific slide
function currentSlide(n) {
  showSpecificSlide(slideIndex = n);
}

// Function to show a specific slide
function showSpecificSlide(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // If slide index exceeds bounds, loop back around
  if (n > slides.length) {
    slideIndex = 1;
  } 
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // Remove active status from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the current slide and activate the corresponding dot
  slides[slideIndex - 1].style.display = "block";  
  dots[slideIndex - 1].className += " active";
}

// Product hover animation
document.querySelectorAll('.product img').forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.transform = 'scale(1.05)';
    });
  
    item.addEventListener('mouseout', () => {
      item.style.transform = 'scale(1)';
    });
  });

  // JavaScript to handle product filtering and animation

document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const products = document.querySelectorAll('.product');
  const navbar = document.querySelector('.navbar');

  // Add click event to all filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');

      // Filter products
      products.forEach(product => {
        if (category === 'all' || product.getAttribute('data-category') === category) {
          product.style.display = 'block'; // Show matching products
          product.classList.add('visible'); // Trigger fade-in effect
        } else {
          product.style.display = 'none'; // Hide non-matching products
          product.classList.remove('visible'); // Ensure it’s hidden
        }
      });
    });
  });

  // Add scroll event to handle navbar background change
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Trigger initial animation for visible products
  products.forEach(product => {
    if (product.style.display !== 'none') {
      product.classList.add('visible');
    }
  });
});

  