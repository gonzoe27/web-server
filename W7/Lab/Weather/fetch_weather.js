let weatherUrl = 'https://api.weather.gov/gridpoints/MPX/116,72/forecast'

let weatherTable = document.querySelector('#weather-forecast')

fetch(weatherUrl)
    .then( response => {
        return response.json()
    })
    .then(weatherJson =>{
        console.log(weatherJson)
        displayWeatherTable(weatherJson)
    })

    .catch(error => {
        console.log(error)
        alert('Sorry, could not get the weather forecast')
    })



function displayWeatherTable(weatherJson) {
    //console.log(weatherJson)
    let forecastArray = weatherJson.properties.periods 
    console.log(forecastArray)
    forecastArray.forEach( forecastPeriodData => {

        let tableRow = document.createElement('tr')

        //Get period name and adding to the table 
        console.log(forecastPeriodData)
        let periodName = forecastPeriodData.name 
        console.log(periodName)

        let periodNameTableData = document.createElement('td')
        periodNameTableData.innerHTML = periodName

        tableRow.appendChild(periodNameTableData)

        //Get temperature, create td , add to ttable row 
        let temperature = forecastPeriodData.temperature
        let temperatureUnit = forecastPeriodData.temperatureUnit
        let temperatureTableData = document.createElement('td')
        temperatureTableData.innerHTML = temperature + temperatureUnit
        tableRow.appendChild(temperatureTableData)

        //Add weather icon 
        let weatherIconSorce = forecastPeriodData.icon 
        let weatherIconTableData = document.createElement('td')
        let weatherIconImage = document.createElement('img')
        weatherIconImage.src = weatherIconSorce
        weatherIconTableData.appendChild(weatherIconImage)
        tableRow.appendChild(weatherIconTableData)

        //Weather description 
        let detailedForecast = forecastPeriodData.detailedForecast
        let detailedForecastTableData = document.createElement('td')
        detailedForecastTableData.innerHTML = detailedForecast
        tableRow.appendChild(detailedForecastTableData)
        

        
        //Add table rows with all the td elements to all the table 
        weatherTable.appendChild(tableRow)
    })

}