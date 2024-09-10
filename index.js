const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const swaggerUI = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
/* const swaggerDocument = require("./swaggerDocs"); // Your centralized Swagger file */

// Routes
const generalInfoRoute = require("./routes/generalInfo");
const workPolicyRoute = require("./routes/workPolicy");
const techStackRoute = require("./routes/techStack");
const skillsRoute = require("./routes/skills");
const jobEnquiryRoute = require("./routes/jobEnquiry");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Robins CV API",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3001",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJSDoc(options);

const app = express();

// Serve Swagger UI static files
app.use(express.static(path.join(__dirname, "node_modules/swagger-ui-dist")));

const port = process.env.PORT || 3001;

app.use(morgan("combined"));
app.use(bodyParser.json());

// Register routes
app.use("/general-info", generalInfoRoute);
app.use("/work-policy", workPolicyRoute);
app.use("/tech-stack", techStackRoute);
app.use("/skills", skillsRoute);
app.use("/job-offer", jobEnquiryRoute);

/* app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerDocument)); */
app.use("/", swaggerUI.serve, swaggerUI.setup(specs));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
