import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  const workPolicy = {
    remotePreference: "I prefer remote work but open to hybrid.",
  };

  res.json(workPolicy);
});

export default router;
