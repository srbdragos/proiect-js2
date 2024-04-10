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
    console.log(form)
    form.addEventListener('submit', function (){
        console.log('Formularul a fost submis');
    });
};


window.addEventListener('load', addFormFunctionality);