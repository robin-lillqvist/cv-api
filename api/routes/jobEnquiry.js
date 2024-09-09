import express from "express";
import nodemailer from "nodemailer";
const router = express.Router();
import path, { dirname } from "path"; // Import path and dirname
import { fileURLToPath } from "url"; // Import fileURLToPath
import dotenv from "dotenv"; // Import dotenv
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

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

function sendEmail(title, description, salary) {
  // Log the details of the mail options
  let mailOptions = {
    from: process.env.SENDER,
    to: process.env.RECIPIENT, // Corrected spelling of RECIPIENT
    subject: "New Job Offer Submission",
    text: `Job Title: ${title}\n Description: ${description}\n Salary: ${salary}`,
  };

  // Send mail and return the Promise
  return transporter
    .sendMail(mailOptions)
    .then((info) => {
      console.log("Nodemailer response:", info.response);
    })
    .catch((error) => {
      console.error("Nodemailer error:", error);
      throw error; // Re-throw error to handle in the calling function
    });
}

export default router;
