const URL = 'https://restcountries.com/v2/name/';

export const fetchCountriesByName = name => {
  return fetch(
    `${URL}${name}?fields=name,capital,population,flags,languages`
  ).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
};
