const request = require('postman-request')

const url = "http://api.weatherstack.com/current?access_key=f8c74517cbd323edbb550f9b4b221da5&query=37.8267,-122.4233"

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('unable to connect to weather service')
    }
    else if (response.body.error) {
        console.log('Unable to find location')
    }
    else {
        console.log(response.body.current.weather_descriptions[0] +
            `. It is currently ${response.body.current.temperature}c with a` +
            ` ${response.body.current.precip}% chance of rain.`)
    }
})

const mapboxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los Angeles.json?access_token=pk.eyJ1IjoibXJsb2cxMDEiLCJhIjoiY2tidW1wYXVsMDM4cDJ6cW51MnloczdhYiJ9.WJ7bPao7ldi54nsiHrSl1g&limit=1"

request({ url: mapboxUrl, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service')
    }
    else if (response.body.features.length === 0) {
        console.log('Unable to find location')
    }
    else {
        console.log(`long ${response.body.features[0].center[0]} lat ${response.body.features[0].center[1]}`)
    }
})