export default fetch(
  'https://restcountries.eu/rest/v2/all',
).then(response => {
  return response.json();
});
