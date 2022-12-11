import './css/styles.css';

export const getItemPreviewTemplete = data => {
  return data
    .map(
      ({ name, flags }) => `
        <li class="country-item">
        <img src="${flags.svg}" alt="${name}" width="30" height="20" />
        <span class="country-name">${name}</span>
      </li>
  `
    )
    .join('');
};
