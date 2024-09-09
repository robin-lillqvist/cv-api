import express from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerJsDoc } from "../swagger.js";
import generalInfoRoute from "./routes/generalInfo.js";
import workPolicyRoute from "./routes/workPolicy.js";
import techStackRoute from "./routes/techStack.js";
import skillsRoute from "./routes/skills.js";
import jobEnquiryRoute from "./routes/jobEnquiry.js";
import bodyParser from "body-parser";
import rateLimit from "express-rate-limit";
import morgan from "morgan";

const app = express();
const port = 3000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);

// Logging HTTP requests
app.use(morgan("combined"));
app.use(bodyParser.json());

// Register routes
app
  .use("/general-info", generalInfoRoute)
  .use("/work-policy", workPolicyRoute)
  .use("/tech-stack", techStackRoute)
  .use("/skills", skillsRoute)
  .use("/job-offer", jobEnquiryRoute);

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerJsDoc));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
