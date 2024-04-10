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
        const phone = {
            name: name,
            price: price
        }

        products.push(phone);
        renderProductList(products);

    });
};


window.addEventListener('load', addFormFunctionality);