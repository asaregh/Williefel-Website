// scripts.js

// Image Thumbnail Click Event
const thumbnails = document.querySelectorAll('.thumbnails img');
const mainImage = document.querySelector('.product-images img');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        mainImage.src = thumbnail.src;
    });
});

// Add to Cart Functionality
const addToCartButton = document.getElementById('add-to-cart');

addToCartButton.addEventListener('click', () => {
    // Example: Simple alert, replace with actual cart logic
    alert('Product added to cart!');
});

// Fetch and Display Reviews (Assuming an API endpoint)
fetch('/api/reviews?product=fold-laptop-stand')
    .then(response => response.json())
    .then(data => {
        const reviewsSection = document.querySelector('.reviews');
        data.reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');
            reviewElement.innerHTML = `
                <h3>${review.title}</h3>
                <p>${review.content}</p>
                <small>— ${review.author}</small>
            `;
            reviewsSection.appendChild(reviewElement);
        });
    })
    .catch(error => console.error('Error fetching reviews:', error));
