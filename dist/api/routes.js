"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teams_routes_1 = __importDefault(require("./teams/teams.routes"));
const tokens_routes_1 = __importDefault(require("./tokens/tokens.routes"));
const router = (0, express_1.Router)();
router.use('/teams', teams_routes_1.default);
router.use('/token', tokens_routes_1.default);
exports.default = router;
//# sourceMappingURL=routes.js.map