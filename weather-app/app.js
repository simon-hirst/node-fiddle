const mapbox = require('./utils/mapbox')
const forecast = require('./utils/forecast')

mapbox('Portsmouth', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})