const swaggerJsDoc = {
  openapi: "3.0.0",
  info: {
    title: "My API Documentation",
    version: "1.0.0",
    description: "API documentation for my project",
  },
  servers: [
    {
      url: "http://localhost:3000", // Make sure the URL matches your setup
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
