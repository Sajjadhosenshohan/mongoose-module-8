"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const student_service_1 = require("./student_service");
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = require("../../utiles/sendResponse");
// import studentJoi_Validate_Schema from "./student_joi_validation";
// get all students info
const getAllStudentsInfoController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield student_service_1.StudentServices.getAllStudentsFromDB();
        // send response
        // res.status(200).json({
        //     success: true,
        //     message: "All students info",
        //     data: result
        // })
        (0, sendResponse_1.sendResponse)(res, {
            success: true,
            message: "All students info",
            statusCode: http_status_1.default.OK,
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
// get a students info
const getAStudentInfoController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentId } = req.params;
        /* console.log(studentId)*/
        const result = yield student_service_1.StudentServices.getAStudentInfo(studentId);
        // send response
        // res.status(200).json({
        //     success: true,
        //     message: "get a student info",
        //     data: result
        // })
        (0, sendResponse_1.sendResponse)(res, {
            success: true,
            message: "get a student info",
            statusCode: http_status_1.default.OK,
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
// delete  a students info
const deleteStudentInfoController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentId } = req.params;
        /* console.log(studentId)*/
        const result = yield student_service_1.StudentServices.deleteStudentInfo(studentId);
        // send response
        // res.status(200).json({
        //     success: true,
        //     message: "delete a student info",
        //     data: result
        // })
        (0, sendResponse_1.sendResponse)(res, {
            success: true,
            message: "delete a student info",
            statusCode: http_status_1.default.OK,
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
exports.StudentController = {
    getAllStudentsInfoController,
    getAStudentInfoController,
    deleteStudentInfoController
};
