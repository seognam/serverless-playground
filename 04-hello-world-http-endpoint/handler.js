// Event: an object that contains all request data
module.exports.run = async(event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message:"Hello world HTTP"
        })
    }
}