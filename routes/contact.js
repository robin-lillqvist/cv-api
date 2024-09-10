const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

router.post("/", (req, res) => {
  const { name, message, phone, email } = req.body;

  if (!message || !name || (!phone && !email)) {
    console.warn("Missing required fields in the request body:", req.body);
    return res.status(400).json({
      error: "Please provide all required fields: name, message and either phone or email.",
    });
  }

  sendEmail(name, message, phone ? phone : null, email ? email : null)
    .then(() => {
      console.log("Email successfully sent!");
      res.status(200).json({ message: "Message sent successfully!" });
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send message." });
    });
});

async function sendEmail(name, message, phone, email) {
  let mailOptions = {
    from: process.env.SENDER,
    to: process.env.RECIPIENT,
    subject: "New Job Offer Submission",
    text: `Hey Robin you have a message from ${name}. ${message}\n You can reach me on either: Phone: ${phone} \n email: ${email}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Nodemailer response:", info.response);
  } catch (error) {
    console.error("Nodemailer error:", error);
    throw error;
  }
}

module.exports = router;
