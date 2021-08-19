import { alert, info, success, error } from '/../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';

import markup from '../template/markup.hbs';
import mainMarkup from '../template/mainMarkup.hbs';
import { refs } from '../js/refs';

export function dataProcessing(dataArr) {
  const countOfCountries = dataArr.length;
     refs.markupContainer.innerHTML = '';

 if (countOfCountries > 10) {
    alert({
      text: `Найдено ${countOfCountries} стран, подходящих по критерию. Уточните запрос!`,
    });
    return;
 } else if (countOfCountries > 2 && countOfCountries <= 10) {
     console.log(countOfCountries);
   
    const markupEl = markup(dataArr);
    refs.markupContainer.innerHTML = markupEl;
    return;
  }
//   refs.markupContainer.innerHTML = '';

  refs.input.value = '';
  const country = dataArr[0];
  const mainMark = mainMarkup(country);
    refs.markupContainer.innerHTML = mainMark;
    return;
}
