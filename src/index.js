import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
var debounce = require('lodash.debounce');
import { getItemPreviewTemplete } from './getItemTemplete';

const URL = 'https://restcountries.com/v2/name/';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
  list: document.querySelector('.country-list'),
};

const render = list => {
  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('beforeend', list);
};

const handleInput = e => {
  let name = e.target.value;
  console.log(e.target.value);
  fetch(`${URL}${name}?fields=name,capital,population,flags,languages`)
    .then(responce => responce.json())
    .then(data => {
      if (data.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
      if (data.length >= 2 && data.length <= 10) {
        const list = getItemPreviewTemplete(data);

        render(list);
      }
      console.log(data);
    });
};

refs.input.addEventListener('input', debounce(handleInput, DEBOUNCE_DELAY));
