import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  const techStack = {
    preferredTechStack: [
      "React",
      "Next.js",
      "Node.js",
      "JavaScript",
      "TypeScript",
    ],
  };

  res.json(techStack);
});

export default router;
