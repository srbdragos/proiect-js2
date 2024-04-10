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
        console.log(eventDetails);
    });
};


window.addEventListener('load', addFormFunctionality);