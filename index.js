import express from "express";
import cors from "cors";
import "dotenv/config";
import router from "./src/routes/router.js";
import connectDB from "./src/utils/connectDB.js";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const PORT = process.env.PORT ? process.env.PORT : 3001;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json());

app.use('/api', router)


const initApp = () => {
    try {
      connectDB();
      app.listen(PORT, () => {
        console.log(`Server listening on http://localhost:${PORT}`);
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  initApp();


// Swagger

const optionsSwg = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Proyecto Final Backend Rolling Code School 2024 - Grupo 7",
        version: "1.0.0",
        description:
          "API...",
      },
      servers: [
        {
          url: `http://localhost:${PORT}`,
        },
      ],
    },
    apis: ["./src/doc/*.js"],
  };
  
  const specs = swaggerJsdoc(optionsSwg);
  
  app.use("/api/doc", swaggerUi.serve, swaggerUi.setup(specs));