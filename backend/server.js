import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import twilio from 'twilio';
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const phone=process.env.phone;
app.post('/send', (req, res) => {
  const { name, number, date, time, department } = req.body;

  const message = `Appointment Confirmed!\n\nPatient: ${name}\nDate: ${date} at ${time}\nDepartment: ${department}`;

  client.messages
    .create({
      body: `${message}`,
      from:'+13185313474',
      to: `+91${phone}`, 
    })
    .then(message => {
      console.log("Message SID:", message.sid);
      res.status(200).json({ success: true, sid: message.sid });
    })
    .catch(error => {
      console.error("Error sending SMS:", error);
      res.status(500).json({ success: false, error: error.message });
    });
});

app.listen(3000, () => {
  console.log('Server running on http://127.0.0.1:3000');
});
