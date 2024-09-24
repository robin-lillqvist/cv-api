const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const techStack = {
    preferredTechStack: ["React", "Next.js", "Node.js", "JavaScript", "TypeScript", "SASS"],
  };

  res.json(techStack);
});

module.exports = router;
