"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class BaseRoute {
    path = "/alive";
    router = (0, express_1.Router)();
    constructor() {
        this.initBaseRoutes();
    }
    /**
     * initBaseRoutes
     */
    initBaseRoutes() {
        this.router.get(`${this.path}`, (_req, res) => {
            res.status(200).json({ ok: true, message: `I AM API AND I AM ALIVE` });
        });
    }
}
exports.default = BaseRoute;
//# sourceMappingURL=base.routes.js.map