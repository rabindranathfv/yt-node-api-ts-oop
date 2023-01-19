"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_routemap_1 = __importDefault(require("express-routemap"));
const helmet_1 = __importDefault(require("helmet"));
const hpp_1 = __importDefault(require("hpp"));
const morgan_1 = __importDefault(require("morgan"));
const config_1 = require("./config/config");
const logger_1 = require("./utils/logger");
const cors_config_1 = __importDefault(require("./config/cors.config"));
class App {
    app;
    env;
    port;
    server;
    constructor(routes) {
        this.app = (0, express_1.default)();
        this.env = config_1.NODE_ENV || "development";
        this.port = Number(config_1.PORT) || 5000;
        this.connectToDatabase();
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        this.initializeSwagger();
        this.initializeErrorHandling();
    }
    /**
     * getServer
     */
    getServer() {
        return this.app;
    }
    closeServer(done) {
        this.server = this.app.listen(this.port, () => {
            done();
        });
    }
    /**
     * connectToDatabase
     */
    connectToDatabase() {
        // TODO: Inicializar la conexion
    }
    initializeMiddlewares() {
        this.app.use((0, morgan_1.default)(config_1.LOG_FORMAT ?? "../logs", { stream: logger_1.stream }));
        this.app.use((0, cors_1.default)(cors_config_1.default));
        this.app.use((0, hpp_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, cookie_parser_1.default)());
    }
    /**
     * initializeRoutes
     */
    initializeRoutes(routes) {
        routes.forEach((route) => {
            this.app.use(`/api/${config_1.API_VERSION}`, route.router);
        });
    }
    /**
     * listen
     */
    listen() {
        this.app.listen(this.port, () => {
            (0, express_routemap_1.default)(this.app);
            logger_1.logger.info(`=================================`);
            logger_1.logger.info(`======= ENV: ${this.env} =======`);
            logger_1.logger.info(`🚀 App listening on the port ${this.port}`);
            logger_1.logger.info(`=================================`);
        });
    }
    initializeSwagger() {
        // TODO: init swagger
    }
    initializeErrorHandling() {
        // TODO: Configure error handleing
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map