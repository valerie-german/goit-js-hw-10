import './css/styles.css';
import { fetchCountries, list, info } from "./js/fetchCountries.js";

var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
const input = document.querySelector("input#search-box");

list.setAttribute("data-action", "hidden");
info.setAttribute("data-action", "hidden");

input.addEventListener('input', debounce((event) => { 
    event.preventDefault();
    const name = event.target.value.trim();
    if (name !== "") {
        fetchCountries(name);
    }
    else { 
        list.innerHTML = "";
        info.innerHTML = "";
        list.setAttribute("data-action", "hidden");
        info.setAttribute("data-action", "hidden");
    }
    
}, DEBOUNCE_DELAY)
)

//убрать в отдельный файл и сделать именованный экспорт





