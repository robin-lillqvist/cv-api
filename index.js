const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("./swaggerDocs"); // Your centralized Swagger file

// Routes
const generalInfoRoute = require("./routes/generalInfo");
const workPolicyRoute = require("./routes/workPolicy");
const techStackRoute = require("./routes/techStack");
const skillsRoute = require("./routes/skills");
const jobEnquiryRoute = require("./routes/jobEnquiry");

const app = express();
const port = process.env.PORT || 3000;

app.use("/swagger-ui", express.static(path.join(__dirname, "node_modules/swagger-ui-dist")));

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions)).use(morgan("combined")).use(bodyParser.json());

// Register routes
app.use("/api/personal", generalInfoRoute);
app.use("/api/work-policy", workPolicyRoute);
app.use("/api/tech-stack", techStackRoute);
app.use("/api/skills", skillsRoute);
app.use("/api/job-offer", jobEnquiryRoute);

app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
