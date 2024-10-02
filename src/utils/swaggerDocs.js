const swaggerJsdoc = require("swagger-jsdoc");
const swaggerDefinition = require("../doc/doc");

const PORT = process.env.PORT || 3001

const optionsSwg = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Proyecto Final Backend Rolling Code School 2024 - Grupo 7",
        version: "1.0.0",
        description: "API...",
      },
      servers: [
        {
          url: `http://localhost:${PORT}/api`,
        },
      ],
      tags: [
        {
          name: "Usuarios",
          description: "Rutas referentes a los usuarios",
        },
        {
          name: "Productos",
          description: "Rutas referentes a los productos",
        }
      ],
      paths: swaggerDefinition
    },
    apis: ["../doc/*.js"],
  };
  
  const swaggerSpecs = swaggerJsdoc(optionsSwg);

  module.exports = swaggerSpecs