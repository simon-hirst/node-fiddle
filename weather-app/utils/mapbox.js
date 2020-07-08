const request = require('postman-request')

const mapbox = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoibXJsb2cxMDEiLCJhIjoiY2tidW1wYXVsMDM4cDJ6cW51MnloczdhYiJ9.WJ7bPao7ldi54nsiHrSl1g&limit=1"

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        }
        else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search query', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = mapbox