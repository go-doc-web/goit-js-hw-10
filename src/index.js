import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
var debounce = require('lodash.debounce');
import { fetchCountriesByName } from './fetchCountries';
import { getItemPreviewTemplete } from './getItemTempletePreview';
import { getItemTemplete } from './getItemTemplate';

const URL = 'https://restcountries.com/v2/name/';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

const renderPreview = list => {
  refs.countryList.innerHTML = '';
  refs.countryList.insertAdjacentHTML('beforeend', list);
};

const render = list => {
  refs.countryInfo.innerHTML = '';
  refs.countryInfo.insertAdjacentHTML('beforeend', list);
};

const handleInput = e => {
  let name = e.target.value.trim();
  if (name === '') {
    refs.countryInfo.innerHTML = '';
    refs.countryList.innerHTML = '';
    return;
  }
  fetchCountriesByName(name)
    .then(data => {
      console.log(data);
      let list = '';
      if (data.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
      if (data.length >= 2 && data.length <= 10) {
        refs.countryInfo.innerHTML = '';
        list = getItemPreviewTemplete(data);
        renderPreview(list);
      }
      if (data.length === 1) {
        refs.countryList.innerHTML = '';
        list = getItemTemplete(data);
        render(list);
      }
    })

    .catch(err => {
      refs.countryInfo.innerHTML = '';
      refs.countryList.innerHTML = '';
      Notify.failure('Oops, there is no country with that name');
    });
};

refs.input.addEventListener('input', debounce(handleInput, DEBOUNCE_DELAY));
