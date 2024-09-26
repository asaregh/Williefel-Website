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
  