function filterSelection(category) {
    let products = document.getElementsByClassName('product-card');
    if (category === 'all') category = '';
    for (let i = 0; i < products.length; i++) {
        products[i].style.display = products[i].className.includes(category) ? 'block' : 'none';
    }
}
