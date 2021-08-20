import { alert, info, success, error } from '/../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';

import markup from '../template/markup.hbs';
import mainMarkup from '../template/mainMarkup.hbs';
import { refs } from '../js/refs';


export function dataProcessing(dataArr) {
  const countOfCountries = dataArr.length;

  if (countOfCountries > 10) {
    info({
      text: `Найдено ${countOfCountries} стран, подходящих по критерию. Уточните запрос!`,
    });
    return;
  } else if (countOfCountries > 2 && countOfCountries <= 10) {
    markupList(dataArr);
    return;
  } else if (countOfCountries = null) {
    cleaner()
    return;
  }
  markupElement(dataArr);
  return;
}

function markupList(arr) {
  const markupEl = markup(arr);
  refs.markupContainer.innerHTML = markupEl;
  return;
}

function markupElement(arr) {
  const country = arr[0];
  const mainMark = mainMarkup(country);
  refs.markupContainer.innerHTML = mainMark;
  return;
}

function cleaner() {
    refs.markupContainer.innerHTML = '';
  return;
}