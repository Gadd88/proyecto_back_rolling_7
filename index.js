const express = require("express");
const cors = require("cors");
require('dotenv').config();
require("dotenv/config");
const UserRoutes = require('./src/routes/user-route.js');
const AuthRoutes = require('./src/routes/auth-route.js');
const ProductRoutes = require('./src/routes/product-route.js');
const { connectDB } = require("./src/utils/connectDB.js");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const PORT = process.env.PORT ? process.env.PORT : 3001;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json());



app.use('/api', ProductRoutes)
app.use('/api', AuthRoutes);
app.use('/api', UserRoutes);

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
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ["./src/doc/*.js"],
};

const specs = swaggerJsdoc(optionsSwg);

app.use("/api/doc", swaggerUi.serve, swaggerUi.setup(specs));
