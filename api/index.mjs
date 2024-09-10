import express from "express";
import generalInfoRoute from "./routes/generalInfo.js";
import workPolicyRoute from "./routes/workPolicy.js";
import techStackRoute from "./routes/techStack.js";
import skillsRoute from "./routes/skills.js";
import jobEnquiryRoute from "./routes/jobEnquiry.js";
import bodyParser from "body-parser";
import rateLimit from "express-rate-limit";
import morgan from "morgan";

const app = express();
const port = process.env.PORT || 3000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);
app.use(morgan("combined"));
app.use(bodyParser.json());

// Register routes
app.use("/general-info", generalInfoRoute);
app.use("/work-policy", workPolicyRoute);
app.use("/tech-stack", techStackRoute);
app.use("/skills", skillsRoute);
app.use("/job-offer", jobEnquiryRoute);

app.get("/", (req, res) => {
  res.send("Welcome to the Node.js API!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app;
