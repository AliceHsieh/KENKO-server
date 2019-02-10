exports.handler = function(event, context, callback) {
  // execute some code finally
  const recipient = event.queryStringParameters.recipient;
  const textmessage = event.queryStringParameters.textmessage;

  // require("../../ENV");
  const twilio = require("twilio");
  try {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = new twilio(accountSid, authToken);

    // //Send Text
    client.messages
      .create({
        textmessage: "HELLO: " + textmessage,
        to: process.env.MY_NUMBER, // Text this number
        from: "+17786554127" // From my number
      })
      .then(message => {
        // console.log(message.body)
        callback(null, {
          statusCode: 200,
          textmessage: "textmessage: " + textmessage
        });
      })
      .catch(e => {
        callback(null, {
          statusCode: 200,
          textmessage: e.message
        });
      });
  } catch (e) {
    callback(null, {
      statusCode: 200,
      textmessage: e.message
    });
  }
};
