exports.handler = function(event, context, callback) {
    // require('./ENV');
    // execute some code finally
    const twilio = require('twilio'); 

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN; 
    const client = new twilio(accountSid, authToken);

    //Send Text
    client.messages.create({
        body: 'HELLO',
        to: '+16047158724',  // Text this number
        from: '+17786554127' // From myo number
    }).then((message) => console.log(message.body));

    callback(null, {
    statusCode: 200,
    body: "Hello, World"
    });
}