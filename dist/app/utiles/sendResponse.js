"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
const sendResponse = (res, data) => {
    const { data: responseData, statusCode, message, success } = data;
    res.status(statusCode).json({
        message,
        success,
        data: responseData,
    });
    return;
};
exports.sendResponse = sendResponse;
