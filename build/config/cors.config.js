"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsConfig = void 0;
const config_1 = require("./config");
exports.corsConfig = {
    allowedHeaders: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    origin: config_1.ORIGIN,
};
exports.default = exports.corsConfig;
//# sourceMappingURL=cors.config.js.map