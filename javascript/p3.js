function filterProducts() {
    const category = document.getElementById('category').value;
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        if (category === 'all' || product.dataset.category === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
