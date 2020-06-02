const request = require('postman-request')

const url = "http://api.weatherstack.com/current?access_key=f8c74517cbd323edbb550f9b4b221da5&query=37.8267,-122.4233"

request({url: url, json: true}, (error, response) => {
    console.log(response.body.current.weather_descriptions[0] + 
        `. It is currently ${response.body.current.temperature}c with a` +
        ` ${response.body.current.precip}% chance of rain.`)
})