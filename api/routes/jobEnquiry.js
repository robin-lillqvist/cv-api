const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
const path = require("path");
const dotenv = require("dotenv");

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

/**
 * @swagger
 * /job-offer:
 *   post:
 *     summary: Send a job offer via email
 *     description: Send a job offer by providing title, description, and salary in the request body. The job offer will be sent via email.
 *     tags:
 *       - Job Offer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - salary
 *             properties:
 *               title:
 *                 type: string
 *                 description: Job title
 *                 example: "Senior Frontend Developer"
 *               description:
 *                 type: string
 *                 description: Job description
 *                 example: "We are looking for a Senior Frontend Developer with experience in React and Next.js."
 *               salary:
 *                 type: string
 *                 description: Salary offered for the position
 *                 example: "$100,000 - $120,000 per year"
 *     responses:
 *       200:
 *         description: Job offer sent successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Job offer sent successfully!"
 *       400:
 *         description: Missing required fields
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Please provide all required fields: title, description, salary"
 *       500:
 *         description: Failed to send job offer
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Failed to send job offer."
 */

module.exports = router;
