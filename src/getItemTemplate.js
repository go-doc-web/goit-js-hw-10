export const getItemTemplete = data => {
  return data
    .map(
      ({ name, flags, capital, population, languages }) => `
      <div class="header-info">
        <img src="${flags.svg}" alt="${name}" width="30" height="20" />
        <span class="country-name country-name--one">${name}</span>
      </div>
      <ul class="info-list list">
        <li class="info-item">Capital: ${capital}</li>
        <li class="info-item">Population: ${population}</li>
        <li class="info-item">Languages: ${languages}</li>
      </ul>
  `
    )
    .join('');
};
