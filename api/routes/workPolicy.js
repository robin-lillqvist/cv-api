import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  const workPolicy = {
    remotePreference: "I prefer remote work but open to hybrid.",
    workHours: "8-5, flexible hours.",
    vacation: "30 days, plus public holidays.",
    noticePeriod: "3 months.",
    overtime: "Rarely, but compensated in time off.",
    collaboration: "Regular team meetings, open-door policy.",
    communication:
      "Slack for quick updates, Google meets for meetings, email for detailed discussions.",
    workPolicy: "I prefer a hybrid work policy.",
  };

  res.json(workPolicy);
});

export default router;
