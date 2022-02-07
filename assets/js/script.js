var apiKey = "7e7f1bd42d85a592b91e137d7133e615";
var fetchbutton = document.getElementById("search");
var weatherData = document.querySelector("weather-info")

// fetch function to city weather info 
var cityWeather = function() {

    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=Denver&units=imperial&appid=" + apiKey;

    fetch(requestUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        var name = document.getElementById("city");
        var temp = document.getElementById("temp");
        var wind = document.getElementById("wind");
        var humid = document.getElementById("humid");
        
        // set text of each id to the corresponding JSON property
        name.textContent = "City: " + data.name;
        temp.textContent = "Temp: " + data.main.temp + " deg";
        wind.textContent = "Wind: " + data.wind.speed + " mph";
        humid.textContent = "Humidity: " + data.main.humidity + "%";

        
        console.log(data);
    });
}

cityWeather();