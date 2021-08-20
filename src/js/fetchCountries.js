import { dataProcessing } from "./dataProcessing";
import { refs } from '../js/refs';

import { alert, info, success, error } from '/../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';

export default function fetchCountries(e) {
  e.preventDefault()
  const name = e.target.value;
   
   fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(response => response.json())
    .then(data => dataProcessing(data))
  .catch(er=>console.log(er))
}

