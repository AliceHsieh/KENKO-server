const express = require('express'); 
const cors = require('cors');
const twilio = require('twilio'); 
require('./ENV');


exports.handler = function(event, context, callback) {

// execute some code finally

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