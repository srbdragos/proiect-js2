root.innerHTML += `

<form>
    <label for="name">Nume:</label>
    <input type="text" name="name" id="name">
    <label for="price">Pret:</label>
    <input type="number" id="price" name="price">
    <input type="submit" value="Adauga un telefon">
</form>
`; 



function addFormFunctionality () {

    const form = document.querySelector('form');
    form.addEventListener('submit', function (eventDetails) {
        eventDetails.preventDefault();
        const name = eventDetails.target.name.value;
        const price = eventDetails.target.price.value;
        const newPhone = {
            name: name,
            price: price
        }
        // PAS1: Extragem produsele din localStorage
        const localStorageProducts = getProducts();
        // PAS2: Modificam produsele
        localStorageProducts.push(newPhone);
        //PAS3: ADaugam produsele modificate in localStorage
        setProducts(localStorageProducts);

        renderProductList(localStorageProducts);

    });
};


window.addEventListener('load', addFormFunctionality);