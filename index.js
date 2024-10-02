const express = require("express");
const cors = require("cors");
require('dotenv').config();
require("dotenv/config");
const routes = require('./src/routes/');
const { connectDB } = require("./src/utils/connectDB.js");
const swaggerSpecs = require("./src/utils/swaggerDocs.js");
const swaggerUi = require("swagger-ui-express");

const PORT = process.env.PORT ? process.env.PORT : 3001;

const app = express();

//middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json());

//routes
app.use('/api', routes)
app.use("/api/doc", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));



//server
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




