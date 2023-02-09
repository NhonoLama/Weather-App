const form = document.querySelector('form');

const updateCity = async (city) => {

    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    return {
        cityDetails : cityDetails,
        weather : weather
    }
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const city = form.city.value.trim();
  form.reset();
  
  updateCity(city)
  .then(data => {console.log(data)})
  .catch(err => {console.log(err)})
})

