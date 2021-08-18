import data from './js/fetchCountries'
import refs from './js/refs'

console.log(refs.root);
console.log(data);

data.then((arr => {
    for (let obj of arr) {
        
        const img = document.createElement('img')
        img.src = obj.flag;
         root.appendChild(img)
    }
}))