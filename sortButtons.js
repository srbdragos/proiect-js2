root.innerHTML += `
    <button id="sort-by-price">Sorteaza dupa pret</button>
`;

window.addEventListener('load', addSortingFunctionality);

function sortProducts(sortType) {
    switch(sortType) {
        case 'SORT_BY_PRICE':
            console.log('sortare dupa pret')
          // code block
          break;
        case 'SORT_BY_NAME':
            console.log('sortare dupa nume')
            // code block
            break;
        default:
          // code block
      }
}

function addSortingFunctionality() {
    const sortByPriceButton = document.querySelector('#sort-by-price');
    sortByPriceButton.addEventListener('click', function(){
        
        // setProducts('SORT_BY_PRICE');
    })

}