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
exports.UserController = void 0;
const user_service_1 = require("./user.service");
const sendResponse_1 = require("../../../utiles/sendResponse");
const http_status_1 = __importDefault(require("http-status"));
const createStudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password, student } = req.body;
        // validate using zod
        // const refineData = studentSchemaZod.parse(student)
        // will call services function to send this data
        // const result = await StudentServices.createStudentInfoDB(refineData)
        const result = yield user_service_1.UserServices.createStudentInfoDB(password, student);
        //  res.status(200).json({
        //     success: true,
        //     message: " Successfully created student info",
        //     data: result
        // })
        (0, sendResponse_1.sendResponse)(res, {
            success: true,
            message: "Successfully created student info",
            statusCode: http_status_1.default.OK,
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
exports.UserController = {
    createStudent
};
