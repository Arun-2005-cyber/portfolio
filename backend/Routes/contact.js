import express from "express";
import dotenv from "dotenv";
import brevo from "@getbrevo/brevo";

dotenv.config();
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    // ✅ Setup Brevo client
    const apiInstance = new brevo.TransactionalEmailsApi();
    apiInstance.setApiKey(
      brevo.TransactionalEmailsApiApiKeys.apiKey,
      process.env.BREVO_API_KEY
    );

    // ✅ Prepare email content (add sender.email)
    const sendSmtpEmail = {
      sender: { 
        email: process.env.SENDER_EMAIL, // ✅ Must be verified in Brevo
        name: "Portfolio Contact" 
      },
      to: [{ 
        email: process.env.RECEIVER_EMAIL, // ✅ Your receiving email
        name: "Arun Portfolio" 
      }],
      subject: `New message from ${name} - ${subject}`,
      htmlContent: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b><br>${message}</p>
      `,
    };

    // ✅ Send email
    await apiInstance.sendTransacEmail(sendSmtpEmail);

    return res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Brevo API error:", error.response?.data || error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to send email" });
  }
});

export default router;
