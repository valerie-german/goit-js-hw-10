import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
const input = document.querySelector("input#search-box");

input.addEventListener('input', debounce((event) => { 
    event.preventDefault();
    const name = event.target.value.trim();
    if (name!=="") {
        fetchCountries(name);        
    }
    
}, DEBOUNCE_DELAY)
)

//убрать в отдельный файл и сделать именованный экспорт
function fetchCountries(name) {
    fetch(`https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`)
        
        .then(response => {
            console.log(response);
            if (!response.ok) {
             throw new Error(response.status);
            } 
            return response.json();
        })
        .then(countries => {

            console.log(countries.length);
        })
        .catch(error => { 
            Notify.failure("Oops, there is no country with that name");
        })
}


