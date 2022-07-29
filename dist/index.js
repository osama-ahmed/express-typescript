"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./api/routes"));
const logger_middleware_1 = __importDefault(require("./api/middlewares/logger.middleware"));
const error_handler_middleware_1 = __importDefault(require("./api/middlewares/error-handler.middleware"));
const custom_error_model_1 = require("./api/models/custom-error.model");
const MySQLConnector = __importStar(require("./api/utils/mysql.connector"));
const app = (0, express_1.default)();
const port = 3000;
// Only generate a token for lower level environments
if (process.env.NODE_ENV !== 'production') {
    //console.log('JWT', generateToken());
}
// create database pool
MySQLConnector.init();
// compresses all the responses
app.use((0, compression_1.default)());
// adding set of security middlewares
app.use((0, helmet_1.default)());
// parse incoming request body and append data to `req.body`
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// enable all CORS request
app.use((0, cors_1.default)());
// add logger middleware
app.use(logger_middleware_1.default);
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/error', function (req, res) {
    const car = { model: 'Santa Fe', year: 2010, brand: 'Hyundai' };
    // forcing to trigger an error
    throw new custom_error_model_1.CustomError("error msg", 500, { "endpoint": "/error" });
    res.send(`The car model is ${car.model}`);
});
app.use('/api/', routes_1.default);
// add custom error handler middleware as the last middleware
app.use(error_handler_middleware_1.default);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map