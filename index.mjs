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
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Ah ah ah, That's too many requests from you, you naughty boy.",
});
app.use(limiter);

// Enable request logging
app.use(morgan("combined"));

// Parse JSON bodies
app.use(bodyParser.json());

// Register routes
app.use("/general-info", generalInfoRoute);
app.use("/work-policy", workPolicyRoute);
app.use("/tech-stack", techStackRoute);
app.use("/skills", skillsRoute);
app.use("/job-offer", jobEnquiryRoute);

// Serve Swagger documentation for the API
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerJsDoc));

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
