import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

// Create transporter once and reuse it
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
    return res.status(400).json({
      error: "Please provide all required fields: title, description, salary",
    });
  }

  sendEmail(title, description, salary)
    .then(() => {
      res.status(200).json({ message: "Job offer sent successfully!" });
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send job offer." });
    });
});

function sendEmail(title, description, salary) {
  let mailOptions = {
    from: process.env.SENDER,
    to: process.env.RECIEPIENT,
    subject: "New Job Offer Submission",
    text: `Job Title: ${title}\n Description: ${description}\n Salary: ${salary}`,
  };

  // Send mail and return the Promise
  return transporter.sendMail(mailOptions);
}

export default router;
