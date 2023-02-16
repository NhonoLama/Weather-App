class Forecast{
    constructor(){
        this.key = 'bGzDI4Y4cbYViPwGHAGuSr6wADcBJqlx';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }

    async updateCity(city){
        const cityDetails = await this.getCity(city);
        const weather = await this.getWeather(cityDetails.Key);

        return { cityDetails , weather};    //object shorthand notation  i.e. { cityDetails : cityDetails , weather : weather }
    }

    //weather information
    async getWeather(id){
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
        return data[0];
    }

    // city information
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI + query);   // resolves the promise and returns to response
        const data = await response.json();                   // resolves the promise and returns to data 
        return data[0];
    }
} 

