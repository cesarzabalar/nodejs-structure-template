// Dependency injection
const { createContainer, asClass, asValue, asFunction } = require("awilix");

// config
const config = require("../config");
const app = require(".");

// services
const { HomeService } = require("../modules/module_one/services");

// controllers
const { HomeController } = require("../modules/module_one/controllers");

// routes
const { HomeRoutes } = require("../routes/index.routes");
const Routes = require("../routes");

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
  });

module.exports = container;
