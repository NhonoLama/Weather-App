const key = 'bGzDI4Y4cbYViPwGHAGuSr6wADcBJqlx';

//weather information
const getWeather = async (id) => {
    const base = `http://dataservice.accuweather.com/currentconditions/v1/${id}`;
    const query = `?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
}

// city information
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);   // resolves the promise and returns to response
    const data = await response.json();           // resolves the promise and returns to data 
    return data[0];
}

