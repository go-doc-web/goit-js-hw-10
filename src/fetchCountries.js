const URL = 'https://restcountries.com/v2/name/';

let items = [];

export const fetchCountries = name => {
  return fetch(`${URL}${name}?fields=name,capital,population,flags,languages`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      items = data;
    });
};
