"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToken = void 0;
const jwt_utils_1 = require("../utils/jwt.utils");
const getToken = (req, res) => {
    res.send((0, jwt_utils_1.generateToken)());
};
exports.getToken = getToken;
//# sourceMappingURL=tokens.controller.js.map