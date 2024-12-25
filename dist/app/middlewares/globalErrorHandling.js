"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandling = void 0;
const globalErrorHandling = (err, req, res, next) => {
    const statusCode = 500;
    const message = err.message || 'Something went wrong!';
    res.status(statusCode).json({
        success: false,
        message,
        error: err,
    });
};
exports.globalErrorHandling = globalErrorHandling;
