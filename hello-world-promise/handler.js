// Event: an object that contains all request data
module.exports.run = async(event) => {
    console.log("Debug Statement") // use --log to show
    return Promise.resolve("Hello World Promise")
}