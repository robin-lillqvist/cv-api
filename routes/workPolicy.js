const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const workPolicy = {
    remotePreference: "I prefer remote work but open to hybrid.",
    workHours: "8-5, flexible hours.",
    vacation: "30 days, plus public holidays.",
    noticePeriod: "3 months.",
    overtime: "Rarely, but compensated in time off.",
    collaboration: "Regular team meetings, open-door policy.",
    communication: "Slack for quick updates, Google meets for meetings, email for detailed discussions.",
    workPolicy: "I prefer a hybrid work policy.",
  };

  res.json(workPolicy);
});

/**
 * @swagger
 * /work-policy:
 *   get:
 *     summary: Get work policy information
 *     description: Returns details about the work policy, including remote preference, work hours, vacation, and other work-related terms.
 *     tags:
 *       - Work
 *     responses:
 *       200:
 *         description: A JSON object containing work policy information.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 remotePreference:
 *                   type: string
 *                   example: "I prefer remote work but open to hybrid."
 *                 workHours:
 *                   type: string
 *                   example: "8-5, flexible hours."
 *                 vacation:
 *                   type: string
 *                   example: "30 days, plus public holidays."
 *                 noticePeriod:
 *                   type: string
 *                   example: "3 months."
 *                 overtime:
 *                   type: string
 *                   example: "Rarely, but compensated in time off."
 *                 collaboration:
 *                   type: string
 *                   example: "Regular team meetings, open-door policy."
 *                 communication:
 *                   type: string
 *                   example: "Slack for quick updates, Google meets for meetings, email for detailed discussions."
 *                 workPolicy:
 *                   type: string
 *                   example: "I prefer a hybrid work policy."
 */

module.exports = router;
