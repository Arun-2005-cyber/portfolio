const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required' });
  }

  try {
    // Setup your email transporter (use your email provider SMTP settings)
    let transporter = nodemailer.createTransport({
      service: 'gmail', // e.g. gmail, outlook, yahoo
      auth: {
        user: 'arunprakashsekar2005@gmail.com', // Replace with your email
        pass: 'arunprakashsekar', // Replace with your password or app password
      },
    });

    const mailOptions = {
      from: email,
      to: 'arunprakashsekar2005@gmail.com', // Your receiving email
      subject: `New message from ${name}: ${subject}`,
      text: message + `\n\nContact email: ${email}`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
