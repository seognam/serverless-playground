// Event: an object that contains all request data
module.exports.run = (event) => {
    console.log("Promise Debug Statement") // use --log to show
    return Promise.resolve("Hello World Promise")
}