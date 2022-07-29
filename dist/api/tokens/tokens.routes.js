"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tokens_controller_1 = require("./tokens.controller");
const router = (0, express_1.Router)();
router
    .route('/')
    .get(tokens_controller_1.getToken);
exports.default = router;
//# sourceMappingURL=tokens.routes.js.map