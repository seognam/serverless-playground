// Event: an object that contains all request data
// context: object containing AWS-specific values (e.g. request ID, log group name, etc.)
// callback: function called with either error response as first arg or success response as second arg
module.exports.run = (event, context, callback) => {
    console.log("Debug statement")
    callback(null, "Hello World")
}