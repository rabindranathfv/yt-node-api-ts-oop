"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config/config");
const app = (0, express_1.default)();
app.listen(config_1.PORT, () => {
    console.log(`api runing in Mode: ${config_1.NODE_ENV} port: ${config_1.PORT} `);
});
//# sourceMappingURL=index.js.map