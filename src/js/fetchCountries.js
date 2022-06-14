import { Notify } from 'notiflix/build/notiflix-notify-aio';


const list = document.querySelector(".country-list");
const info = document.querySelector(".country-info");

const fetchCountries = function fetchCountries(name) {
    fetch(`https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`)
        
        .then(response => {            
            if (!response.ok) {
             throw new Error(response.status);
            } 
            return response.json();
        })
        .then(countries => {

            const names = countries.map(country => country.name);
            const flags = countries.map(country => country.flags);
            const languages = countries.flatMap(country => country.languages).map(language => language.name).join(", ");
          
            if (countries.length>10) {
                Notify.info("Too many matches found. Please enter a more specific name.");
                list.innerHTML = "";
                list.setAttribute("data-action", "hidden");
                info.setAttribute("data-action", "hidden");
            }
            else if (countries.length >=2 && countries.length <=10) {                          

                list.innerHTML = "";
                info.innerHTML = "";                
                list.removeAttribute("data-action");
                info.setAttribute("data-action", "hidden");

                for (let i = 0; i < countries.length; i += 1) {
                    const markup = `<li><div class="country-item"><img src="${flags[i].svg}" alt="${names[i]} flag"/> ${names[i]}</div></li>`;
                    list.insertAdjacentHTML("beforeend", markup)
                 }

            }
            else {
                list.setAttribute("data-action", "hidden");
                list.innerHTML = "";
                info.removeAttribute("data-action");
               
                
                const markup = `
                <div class="country"><img src="${flags[0].svg}" alt="${names[0]} flag"/><h2>${names[0]}</h2></div>                
                <ul class="info-list"><li><span>Capital: </span>${countries[0].capital}</li><li><span>Population: </span>${countries[0].population}</li><li><span>Languages: </span>${languages}</li></ul>
                `;

                info.innerHTML = markup;
            } 
            
        })
        .catch(error => { 
            Notify.failure("Oops, there is no country with that name");
        })
}


export { fetchCountries, list, info };
