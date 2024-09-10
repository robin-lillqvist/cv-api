import express from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerJsDoc } from "./swagger.js";
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

const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

// Serve Swagger UI at the root
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerJsDoc, { customCssUrl: CSS_URL }));

// Register routes
app.use("/api/general-info", generalInfoRoute);
app.use("/api/work-policy", workPolicyRoute);
app.use("/api/tech-stack", techStackRoute);
app.use("/api/skills", skillsRoute);
app.use("/api/job-offer", jobEnquiryRoute);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app;
