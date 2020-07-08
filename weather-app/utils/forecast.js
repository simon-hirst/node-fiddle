const request = require('postman-request')

const forecast = (long, lat, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=f8c74517cbd323edbb550f9b4b221da5&query=" + lat + "," + long

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to weatherstack service", undefined)
        }
        else if (response.body.error) {
            callback("Unable to find location, please try another query", undefined)
        }
        else {
            callback(undefined, response.body.current.weather_descriptions[0] +
                `. It is currently ${response.body.current.temperature}c with a` +
                ` ${response.body.current.precip}% chance of rain.`)
        }
    })
}

module.exports = forecast