import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  const skills = {
    Skills: [
      { React: "7" },
      { NextJs: "6" },
      { NodeJS: "6" },
      { JavaScript: "8" },
      { TypeScript: "5" },
    ],
  };

  res.json(skills);
});

export default router;
