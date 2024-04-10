root.innerHTML += `
<h2>Telefoane:</h2>
<ul id="product-list"></ul>
`;

// Functie care afiseaza lista de produse pe ecran.
function renderProductList(products) {
    const ul = document.querySelector('#product-list');
    ul.innerHTML = '';

    // Afisam continutul static (ce nu va varia in functie de datele din JS).

    // forEach itereaza prin elementele array-ului.
    products.forEach(function (product) {
        // Cream un produs, pe baza numelui si pretului.
        const phone = new Product(product.name, product.price);
        // Il afisam pe ecran.
        phone.renderProduct();
    });
}