const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const techStack = {
    preferredTechStack: ["React", "Next.js", "Node.js", "JavaScript", "TypeScript", "SASS"],
  };

  res.json(techStack);
});

/**
 * @swagger
 * /api/tech-stack:
 *   get:
 *     summary: Get preferred technology stack
 *     description: Returns a list of preferred technologies used in development, including front-end and back-end technologies.
 *     tags:
 *       - Tech Stack
 *     responses:
 *       200:
 *         description: A JSON object containing a list of preferred technologies
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 preferredTechStack:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example:
 *                     - React
 *                     - AWS
 *                     - MySQL
 */

module.exports = router;
