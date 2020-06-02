const request = require('postman-request')

const url = "http://api.weatherstack.com/current?access_key=f8c74517cbd323edbb550f9b4b221da5&query=37.8267,-122.4233"

request(url, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})