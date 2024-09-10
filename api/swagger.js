export const swaggerJsDoc = {
  openapi: "3.0.0",
  info: {
    title: "Robin's CV API",
    version: "1.0.0",
    description:
      "This is an API that provides information about a person, their preferences, skills, and allows submitting job offers.",
  },
  servers: [
    {
      url: "/api",
    },
  ],
  paths: {
    "/general-info": {
      get: {
        summary: "Get my general information",
        description: "Returns general information about me including name, age, and location.",
        responses: {
          200: {
            description: "General information retrieved successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    name: { type: "string", example: "Albert Einstein" },
                    age: { type: "integer", example: 144 },
                    location: { type: "string", example: "Ulm, Germany" },
                    motto: { type: "string", example: "The speed of light" },
                    extracurricularActivities: {
                      type: "array",
                      items: { type: "string" },
                      example: ["Science", "Inspiring the world"],
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/work-policy": {
      get: {
        summary: "Get my preferred work policy",
        description: "Returns my work policy preference, such as remote or hybrid work.",
        responses: {
          200: {
            description: "Work policy retrieved successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    remotePreference: {
                      type: "string",
                      example: "I prefer remote work but open to hybrid.",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/tech-stack": {
      get: {
        summary: "Get my preferred tech stack",
        description: "Returns the my preferred technologies for development.",
        responses: {
          200: {
            description: "Tech stack retrieved successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    preferredTechStack: {
                      type: "array",
                      items: { type: "string" },
                      example: ["React", "Next.js", "Node.js", "JavaScript", "TypeScript"],
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/skills": {
      get: {
        summary: "See my skills",
        description: "Returns a list of my skills and proficiency levels.",
        responses: {
          200: {
            description: "Skills retrieved successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    Skills: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          skill: { type: "string" },
                          proficiency: { type: "integer" },
                        },
                      },
                      example: [{ React: 7 }, { NextJs: 6 }, { "Node.js": 6 }, { JavaScript: 8 }, { TypeScript: 5 }],
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/job-offer": {
      post: {
        summary: "Submit a job offer",
        description: "Submits a job offer that includes the title, description, and salary, and sends an email to me.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  title: { type: "string", example: "Frontend Developer" },
                  description: {
                    type: "string",
                    example: "Develop and maintain web applications.",
                  },
                  salary: { type: "integer", example: 70000 },
                },
                required: ["title", "description", "salary"],
              },
            },
          },
        },
        responses: {
          200: {
            description: "Job offer submitted and email sent successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Job offer sent successfully!",
                    },
                  },
                },
              },
            },
          },
          400: {
            description: "Missing required fields",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    error: {
                      type: "string",
                      example: "Please provide all required fields: title, description, salary",
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Failed to send the email",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    error: {
                      type: "string",
                      example: "Failed to send job offer.",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
