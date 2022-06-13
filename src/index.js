import './css/styles.css';

var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
const input = document.querySelector("#search-box");

input.addEventListener('input', debounce((event) => { 
    event.preventDefault();
    const name = event.target.value;
    
    fetchCountries(name); 
}, DEBOUNCE_DELAY)
)

//убрать в отдельный файл и сделать именованный экспорт
function fetchCountries(name) {
    fetch(`https://restcountries.com/v2/name/${name}`)
        
        .then(response => {
            console.log(response);
            // if (!response.ok) {
            //  throw new Error(response.status);
            // } 
            return response.json();
        })
        .then(country => { 
            console.log(country);
        })
        .catch(error => { 
            console.log(`Error`);
        })
}


