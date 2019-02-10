const express = require('express'); 
const cors = require('cors');
const twilio = require('twilio'); 
const ENV = require('./ENV');

//twilio requirements -- Texting API 
const accountSid = ENV.TWILIO_ACCOUNT_SID;
const authToken = ENV.TWILIO_AUTH_TOKEN; 
const client = new twilio(accountSid, authToken);

const app = express(); //alias

app.use(cors()); //Blocks browser from restricting any data

//Welcome Page for the Server 
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server')
})

//Twilio 
app.get('/send-text', (req, res) => {
    //Welcome Message
    res.send('Hello to the Twilio Server')

    //_GET Variables
    const { recipient, textmessage } = req.query;


    //Send Text
    client.messages.create({
        body: textmessage,
        to: recipient,  // Text this number
        from: '+17786554127' // From myo number
    }).then((message) => console.log(message.body));
})

app.listen(4000, () => console.log("Running on Port 4000"))