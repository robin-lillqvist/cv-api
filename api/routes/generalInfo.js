const express = require("express");
const router = express.Router();

// Route logic
router.get("/", (req, res) => {
  res.json({
    name: "Robin Lillqvist",
    age: 40,
    location: "Stockholm, Sweden",
    motto: "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice",
    extracurricularActivities: ["Tech geek", "Constant learner", "Family man", "Music lover", "Beer connoisseur"],
  });
});

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get personal information about me
 *     description: Returns personal details including name, age, location, motto, and extracurricular activities.
 *     tags:
 *       - Personal Information
 *     responses:
 *       200:
 *         description: A JSON object containing personal details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   example: Albert Einstein
 *                 age:
 *                   type: integer
 *                   example: 76
 *                 location:
 *                   type: string
 *                   example: Princeton, New Jersey, USA
 *                 motto:
 *                   type: string
 *                   example: "Imagination is more important than knowledge."
 *                 extracurricularActivities:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example:
 *                     - Physicist
 *                     - Mathematician
 *                     - Philosopher of science
 *                     - Violinist
 */

module.exports = router;
