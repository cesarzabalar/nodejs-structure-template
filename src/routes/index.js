const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
require("express-async-errors");
const { NotFoundMiddleware, ErrorMiddleware } = require("../middlewares");

module.exports = ({ HomeRoutes }) => {
  const router = express.Router();
  const apiRoutes = express.Router();

  // default middlewares
  apiRoutes.use(express.json()).use(cors()).use(helmet()).use(compression());

  // routes
  apiRoutes.use("/home", HomeRoutes);
  router.use("/v1/api", apiRoutes);

  // custom middlewares
  router.use(NotFoundMiddleware);
  router.use(ErrorMiddleware);

  return router;
};
