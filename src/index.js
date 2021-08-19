// import data from './js/fetchCountries'

  fetch('https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&image_type=illustration&orientation=vertical&per_page=3')
//   fetch('https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&id=6543897')
  .then(response => response.json())
  .then(data => createGallery(data.hits))
    .catch(err => console.log(err))
  

    
  function createGallery (arr) {
      for (let obj of arr) {
          createImg(obj)
      }
  }


  function createImg (obj) {
      const img = document.createElement('img')
      img.src = obj.webformatURL;
      root.appendChild(img)
  }

  const root = document.querySelector('#root')



import { refs } from './js/refs';

refs.input.addEventListener('input', _.debounce(fetchCountries, 500));

function fetchCountries(searchQuery) {
  const name = searchQuery;

 fetch(`'https://restcountries.eu/rest/v2/name/${name}'`)
    .then((response) => response.json)    
    .then((data) => painting(data));

}

function searchQuery() {
   return refs.input.value; 
}

// 

function painting(arr) {
  for (let c of arr) {
    const img = document.createElement('img')
      img.src = c.flag;
     refs.root.appendChild(img)
  }
}


// // function fetchCountries(searchQuery) { 
  
  
// // return fetch(`'https://restcountries.eu/rest/v2/name/${name}'`)
// //   .then(response => {
   
// //     console.log(response.json());
// //     return response.json();
// //   });
// // }
