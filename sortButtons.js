root.innerHTML += `
    <button id="sort-by-price">Sorteaza dupa pret</button>
`;

window.addEventListener('load', addSortingFunctionality);

function sortProducts(sortType) {
    switch(sortType) {
        case 'SORT_BY_PRICE':
                function compare(phone1,phone2) {
                    if (phone1.price < phone2.price) {
                        return -1;
                    }                    
                    if (phone1.price > phone2.price) {
                        return 1;
                    }
                    return 0;
                }
            console.log('sortare dupa pret')
            const localStorageProducts = getProducts();
            localStorageProducts.sort(compare);
            console.log(localStorageProducts);
          
          break;
        case 'SORT_BY_NAME':
            console.log('sortare dupa nume')
            
            break;
        default:
      }
}

function addSortingFunctionality() {
    const sortByPriceButton = document.querySelector('#sort-by-price');
    sortByPriceButton.addEventListener('click', function(){
        setProducts('SORT_BY_PRICE');
    })

}