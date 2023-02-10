const form = document.querySelector('form');
const details = document.querySelector('.details');
const card = document.querySelector('.card');

const updateUI = async (data) => {
    //const cityDetails = data.cityDetails;
    //const weather = data.weather;

    //destructing property
    const {cityDetails , weather} = data;    // shorter form of above statements
    
    details.innerHTML = ` <div class="details text-muted text-uppercase text-center">
          <h5 class="my-3">${cityDetails.LocalizedName}</h5>
          <div class="my-3">${weather.WeatherText}</div>
          <div class="display-4 my-4">
              <span>${weather.Temperature.Metric.Value}</span>
              <span>&deg;C</span>
          </div>
      </div>`
    
    if(card.classList.contains('d-none')){
      card.classList.remove('d-none');
    }
}

const updateCity = async (city) => {

    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    return { cityDetails , weather};    //object shorthand notation  i.e. { cityDetails : cityDetails , weather : weather }
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const city = form.city.value.trim();
  form.reset();
  
  updateCity(city)
  .then(data => updateUI(data))
  .catch(err => {console.log(err)})
})

