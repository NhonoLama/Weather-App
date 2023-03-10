const form = document.querySelector('form');
const details = document.querySelector('.details');
const card = document.querySelector('.card');
const icon = document.querySelector('.icon img');
const img = document.querySelector('img.time');
const forcast = new Forecast();

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

    //checking day or night time
    let dayTime = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    img.setAttribute('src' , dayTime);

    //placing the weather icon 
    const weatherIcon = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src' , weatherIcon);

    // hiding and showing the card after inputing the city name
    if(card.classList.contains('d-none')){
      card.classList.remove('d-none');
    }
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const city = form.city.value.trim();
  form.reset();
  
  forcast.updateCity(city)
  .then(data => updateUI(data))
  .catch(err => {console.log(err)})

  //storing the inputed city in local storage
  localStorage.setItem('city' , city);
})

if(localStorage.getItem('city')){
  forcast.updateCity(localStorage.getItem('city'))
   .then(data => updateUI(data))
   .catch(err => console.log(err))
}


