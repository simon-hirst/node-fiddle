const mapbox = require('./utils/mapbox')

// const url = "http://api.weatherstack.com/current?access_key=f8c74517cbd323edbb550f9b4b221da5&query=37.8267,-122.4233"

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('unable to connect to weather service')
//     }
//     else if (response.body.error) {
//         console.log('Unable to find location')
//     }
//     else {
//         console.log(response.body.current.weather_descriptions[0] +
//             `. It is currently ${response.body.current.temperature}c with a` +
//             ` ${response.body.current.precip}% chance of rain.`)
//     }
// })

mapbox('Portsmouth', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})