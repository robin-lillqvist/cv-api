const express = require("express");
const generalInfoRoute = require("./routes/generalInfo");
const workPolicyRoute = require("./routes/workPolicy");
const techStackRoute = require("./routes/techStack");
const skillsRoute = require("./routes/skills");
const jobEnquiryRoute = require("./routes/jobEnquiry");
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");

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

module.exports = app;
