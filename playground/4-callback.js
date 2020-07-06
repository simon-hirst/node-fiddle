const myCallbackFunction = () => {
    console.log('Two seconds are up')
}

setTimeout(myCallbackFunction, 2000)

const names = ['Simon', 'Paul', 'Teresa']
const shortNames = names.filter((name) => {
    // console.log('Handling ' + name + ' within the names')
    return name.length <= 4
})

// console.log('Names array contains: ' + shortNames)

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }

        callback(data)
    }, 2000)
}

geocode('Philadelphia', (data) => {
    console.log(data)
})

function add(num1, num2, callback) {
    setTimeout(() => {
        callback(num1 + num2)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})