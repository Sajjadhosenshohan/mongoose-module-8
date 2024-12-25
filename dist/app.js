"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const globalErrorHandling_1 = require("./app/middlewares/globalErrorHandling");
const notFound_1 = require("./app/middlewares/notFound");
const router_1 = __importDefault(require("./app/router"));
const app = (0, express_1.default)();
//parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// app.use('/api/v1/students', router)
// app.use('/api/v1/users', UserRoutes)
app.use('/api/v1', router_1.default);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// not found
app.use(notFound_1.notFound);
// global error handle
app.use(globalErrorHandling_1.globalErrorHandling);
exports.default = app;
