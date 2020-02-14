const uuid = require("uuid/v4");

// No need to install this because it is shipped with the serverless package
const AWS = require("aws-sdk");

const client = new AWS.DynamoDB.DocumentClient();

// Event: an object that contains all request data
module.exports.run = async(event) => {
    
    const data = JSON.parse(event.body);

    const params = {
        TableName: "todos",
        Item: {
            id: uuid(),
            text: data.text,
            checked: false
        }
    }
    
    // This will return a 500 if we have an invalid req
    // We could log a custom error by wrapping with try-catch
    await client.put(params).promise();

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }

}