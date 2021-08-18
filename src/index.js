console.log('hello');
fetch('https://restcountries.eu/rest/v2/name/eesti').then((r)=>{console.log(r.json);})
