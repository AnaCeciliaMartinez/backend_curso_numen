const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const apiRouter = require("./routes/api");

const { connect } = require("./db/db");

const app = express();

// usos librerias
app.use(logger("dev"));
app.use(express.json());
app.use(cors());

// rutas
app.use("/api", apiRouter);

//conexion con la base de datos
connect();

module.exports = app;
