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

module.exports = router;
