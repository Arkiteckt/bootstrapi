
//query select button id to generate dog pic
 dogPicButton = document.querySelector('#dog-pic-button');

//dogPicButton event listener
dogPicButton.addEventListener('click', makeApiRequest)

async function makeApiRequest() {

      rawData = await fetch('https://dog.ceo/api/breeds/image/random');
     data = await rawData.json();

     image = document.querySelector('#doggyPic');
    image.src = data.message;

}

// weather app

 cityInput = document.querySelector('#cityInput');
 weatherSubmit = document.querySelector('#weatherSubmit');
 url = 'https://goweather.herokuapp.com/weather/'

// event listener

weatherSubmit.addEventListener('click', async function (e) {
    e.preventDefault();
     result = await apiRequestWeather(cityInput.value)
    displayData(result);
})

// fetch data

async function apiRequestWeather(city) {

    //add what user typed to end of url:
     newUrl = url + city;
    console.log(newUrl);

    //use that new url and fetch the data from it
     rawData = await fetch(newUrl);

    // parse raw data, store that
     data = await rawData.json();

    return data;
    console.log(data);
}

// display data
 weatherDataContainer = document.querySelector('#apiWeatherData');

function displayData(data) {
     temperature = data.temperature;
     wind = data.wind;
     description = data.description;
     forecasts = data.forecast;

     mainElement = `
    <p>Temperature: ${temperature}</p>
    <p>Wind: ${wind}</p>
    <p>Description: ${description}</p>
    <p>Forecast:
  `

    weatherDataContainer.innerHTML = mainElement

    for (forecast of forecasts) {

        let day = forecast.day
        let temp = forecast.temperature
        let wind = forecast.wind

        day.value
        temp.value
        wind.value
    }



    console.log(data)
}