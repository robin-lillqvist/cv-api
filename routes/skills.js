const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const skills = {
    Skills: [{ React: "8" }, { NextJs: "8" }, { NodeJS: "6" }, { JavaScript: "8" }, { TypeScript: "5" }],
  };

  res.json(skills);
});

/**
 * @swagger
 * /skills:
 *   get:
 *     summary: Get list of skills with proficiency levels
 *     description: Returns a list of programming skills with associated proficiency levels (on a scale of 1 to 10).
 *     tags:
 *       - Skills
 *     responses:
 *       200:
 *         description: A JSON object containing skills and proficiency levels
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Skills:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       React:
 *                         type: string
 *                         example: "8"
 *                       NextJs:
 *                         type: string
 *                         example: "8"
 *                       NodeJS:
 *                         type: string
 *                         example: "6"
 *                       JavaScript:
 *                         type: string
 *                         example: "8"
 *                       TypeScript:
 *                         type: string
 *                         example: "5"
 */

module.exports = router;
