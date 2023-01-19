"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ORIGIN = exports.API_VERSION = exports.LOG_FORMAT = exports.LOG_DIR = exports.PORT = exports.NODE_ENV = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: `.env.${process.env.NODE_ENV || "development"}.local` });
_a = process.env, exports.NODE_ENV = _a.NODE_ENV, exports.PORT = _a.PORT, exports.LOG_DIR = _a.LOG_DIR, exports.LOG_FORMAT = _a.LOG_FORMAT, exports.API_VERSION = _a.API_VERSION, exports.ORIGIN = _a.ORIGIN;
//# sourceMappingURL=config.js.map