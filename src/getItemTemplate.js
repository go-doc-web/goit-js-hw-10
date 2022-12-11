export const getItemTemplete = data => {
  return data.map(({ name, flags, capital, population, languages }) => {
    const lang = languages.map(lang => lang.name);

    return `
      <div class="header-info">
        <img src="${flags.svg}" alt="${name}" width="50" height="30" />
        <span class="country-name country-name--one">${name}</span>
      </div>
      <ul class="info-list list">
        <li class="info-item">Capital: <span class="info-item-text">${capital}</span></li>
        <li class="info-item">Population:<span class="info-item-text"> ${population}</span></li>
        <li class="info-item">Languages: <span class="info-item-text">${lang.join(
          ', '
        )}</span></li>
      </ul>
  `;
  });
};

// function ReptileListItem(array) {
//   const lang = Object.values(array).join(', ');
//   return lang;
// }

// export const getCounrtyInfoMarkup = data => {
//   const { flags, name, capital, population, languages } = data;
//   const lang = Object.values(languages).join(', ');
//   return `  <div class="card-title">    <img src="${flags.svg}" alt="Country flag" width="40" />    <h>${name}</h>  </div>  <ul class="card-list">    <li class="card-element"><span>Capital:</span>${capital}</li>    <li class="card-element"><span>Population:</span>${population}</li>    <li class="card-element"><span>Languages:</span>${lang}</li>  </ul>  `;
// };
