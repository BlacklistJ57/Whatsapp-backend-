const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const accountSid = 'YOUR_TWILIO_SID';Account SID-ACd4e6fe2960d9d7f935a2ea2378ed77a9


const authToken = 'YOUR_TWILIO_AUTH_TOKEN',Token-7810d05b0f5eb5330b2f64d09f2c50cb


const client = twilio(accountSid, authToken);

app.post('/send-message', (req, res) => {
    const { message } = req.body;

    client.messages
        .create({
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+255658355407',
            body: message,
        })
        .then(() => res.send('Ujumbe umetumwa!'))
        .catch((err) => res.status(500).send(err));
});

app.listen(3000, () => console.log('Server inafanya kazi kwenye port 3000'));


