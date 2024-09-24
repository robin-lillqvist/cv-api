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
  const { title, description, salary } = req.body;

  if (!title || !description || !salary) {
    console.warn("Missing required fields in the request body:", req.body);
    return res.status(400).json({
      error: "Please provide all required fields: title, description, salary",
    });
  }

  sendEmail(title, description, salary)
    .then(() => {
      console.log("Email successfully sent!");
      res.status(200).json({ message: "Job offer sent successfully!" });
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send job offer." });
    });
});

async function sendEmail(title, description, salary) {
  let mailOptions = {
    from: process.env.SENDER,
    to: process.env.RECIPIENT,
    subject: "New Job Offer Submission",
    text: `Job Title: ${title}\n Description: ${description}\n Salary: ${salary}`,
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
