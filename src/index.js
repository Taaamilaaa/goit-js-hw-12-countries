import fetchCountries from './js/fetchCountries';
import { refs } from './js/refs';
import  dataProcessing from './js/dataProcessing';
import markup from './template/markup.hbs';

// import { alert, info, success, error } from '../node_modules/@pnotify/core/dist/PNotify.js';
// import '@pnotify/core/dist/BrightTheme.css';

refs.input.addEventListener('input', _.debounce(fetchCountries, 500));

//===================================================

