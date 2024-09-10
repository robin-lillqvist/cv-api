const swaggerJsDoc = {
  openapi: "3.0.0",
  info: {
    title: "Robin Lillqvist's API Documentation",
    version: "1.0.0",
    description: "This API serves endpoints for general info, job offers, work policy, tech stack, and skills.",
  },
  servers: [
    {
      url: "http://localhost:3000",
    },
  ],
  paths: {
    "/api/personal": {
      get: {
        summary: "Get personal information about Albert Einstein",
        description: "Returns personal details including name, age, location, motto, and extracurricular activities.",
        tags: ["Personal Information"],
        responses: {
          200: {
            description: "A JSON object containing personal details",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    name: {
                      type: "string",
                      example: "Albert Einstein",
                    },
                    age: {
                      type: "integer",
                      example: 76,
                    },
                    location: {
                      type: "string",
                      example: "Princeton, New Jersey, USA",
                    },
                    motto: {
                      type: "string",
                      example: "Imagination is more important than knowledge.",
                    },
                    extracurricularActivities: {
                      type: "array",
                      items: {
                        type: "string",
                      },
                      example: ["Physicist", "Mathematician", "Philosopher of science", "Violinist"],
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/api/job-offer": {
      post: {
        summary: "Submit a job offer",
        description: "Submits a job offer by providing title, description, and salary in the request body.",
        tags: ["Job Offer"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["title", "description", "salary"],
                properties: {
                  title: {
                    type: "string",
                    description: "The title of the job offer",
                    example: "Frontend Developer",
                  },
                  description: {
                    type: "string",
                    description: "The description of the job offer",
                    example: "We are looking for a talented Frontend Developer with experience in React and Next.js.",
                  },
                  salary: {
                    type: "string",
                    description: "The salary for the job offer",
                    example: "$80,000 - $100,000",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Job offer sent successfully",
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
            description: "Failed to send job offer",
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
    "/api/work-policy": {
      get: {
        summary: "Get work policy details",
        description: "Returns information about work preferences, policies, and other work-related details.",
        tags: ["Work Policy"],
        responses: {
          200: {
            description: "A JSON object containing work policy details",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    remotePreference: {
                      type: "string",
                      example: "I prefer remote work but open to hybrid.",
                    },
                    workHours: {
                      type: "string",
                      example: "8-5, flexible hours.",
                    },
                    vacation: {
                      type: "string",
                      example: "30 days, plus public holidays.",
                    },
                    noticePeriod: {
                      type: "string",
                      example: "3 months.",
                    },
                    overtime: {
                      type: "string",
                      example: "Rarely, but compensated in time off.",
                    },
                    collaboration: {
                      type: "string",
                      example: "Regular team meetings, open-door policy.",
                    },
                    communication: {
                      type: "string",
                      example: "Slack for quick updates, Google meets for meetings, email for detailed discussions.",
                    },
                    workPolicy: {
                      type: "string",
                      example: "I prefer a hybrid work policy.",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/api/tech-stack": {
      get: {
        summary: "Get preferred technology stack",
        description:
          "Returns a list of preferred technologies used in development, including front-end and back-end technologies.",
        tags: ["Tech Stack"],
        responses: {
          200: {
            description: "A JSON object containing a list of preferred technologies",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    preferredTechStack: {
                      type: "array",
                      items: {
                        type: "string",
                      },
                      example: ["React", "Next.js", "Node.js", "JavaScript", "TypeScript", "SASS"],
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/api/skills": {
      get: {
        summary: "Get list of skills with proficiency levels",
        description: "Returns a list of programming skills with associated proficiency levels (on a scale of 1 to 10).",
        tags: ["Skills"],
        responses: {
          200: {
            description: "A JSON object containing skills and proficiency levels",
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
                          React: {
                            type: "string",
                            example: "8",
                          },
                          NextJs: {
                            type: "string",
                            example: "8",
                          },
                          NodeJS: {
                            type: "string",
                            example: "6",
                          },
                          JavaScript: {
                            type: "string",
                            example: "8",
                          },
                          TypeScript: {
                            type: "string",
                            example: "5",
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
      },
    },
  },
};

module.exports = swaggerJsDoc;
