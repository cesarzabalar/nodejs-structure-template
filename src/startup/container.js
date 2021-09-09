// Dependency injection
const { createContainer, asClass, asValue, asFunction } = require("awilix");

// config
const config = require("../config");
const app = require(".");

// module home
const {
  HomeService,
  HomeController,
  HomeRoutes,
} = require("../modules/module_one");

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
