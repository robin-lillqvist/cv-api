const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const skills = {
    Skills: [{ React: "8" }, { NextJs: "8" }, { NodeJS: "6" }, { JavaScript: "8" }, { TypeScript: "5" }],
  };

  res.json(skills);
});

module.exports = router;
