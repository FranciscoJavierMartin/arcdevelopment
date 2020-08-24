import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';
const cors = require('cors')({ origin: true });

const config = functions.config();

admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: config.user.email,
    pass: config.user.password,
  },
});

// const mailOptions = {
//   from: 'Arc Development',
//   // This should be another email different
//   to: config.user.email,
//   subject: 'Testing nodemailer',
//   text: 'Test successful',
// };

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const { email, name, phone, messge } = request.query;

    const mailOptions = {
      from: 'Arc Development',
      // This should be another email
      to: email as string,
      subject: 'Message received',
      html: `
      <p style="font-size: 16px">From: ${name}</p>
      <p style="font-size: 16px">Email: ${email}</p>
      <p style="font-size: 16px">Phone Number: ${phone}</p>
      <p style="font-size: 16px">Message: ${messge}</p>
      `
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        response.send(error);
      } else {
        response.send('Message sent successfully');
      }
    });

    const mailOptions2 = {
      from: 'Arc Development',
      // This should be another email
      to: email as string,
      subject: 'We have received your message',
      html: `
      <p style="font-size: 16px">From: ${name}</p>
      <p style="font-size: 16px">Email: ${email}</p>
      <p style="font-size: 16px">Phone Number: ${phone}</p>
      <p style="font-size: 16px">Message: ${messge}</p>
      `
    };

    transporter.sendMail(mailOptions2);
  });
});
