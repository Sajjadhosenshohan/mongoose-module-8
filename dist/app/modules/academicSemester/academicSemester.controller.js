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
exports.AcademicSemseterController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = require("../../utiles/sendResponse");
const catchAsync_1 = __importDefault(require("../../utiles/catchAsync"));
const academicSemester_services_1 = require("./academicSemester.services");
const createAcademicSemester = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicSemester_services_1.AcademicSemseterServices.createAcademicSemesterIntoDB(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "Successfully created academicSemester info",
        statusCode: http_status_1.default.OK,
        data: result
    });
}));
const getAllAcademicSemester = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicSemester_services_1.AcademicSemseterServices.getAllAcademicSemesterFromDB();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "Successfully get all academic-semester data",
        statusCode: http_status_1.default.OK,
        data: result
    });
}));
const getSingleAcademicSemester = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { semesterId } = req.params;
    const result = yield academicSemester_services_1.AcademicSemseterServices.getSingleAcademicSemesterFromDB(semesterId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "Successfully get single academic-semester data",
        statusCode: http_status_1.default.OK,
        data: result
    });
}));
const updateSingleAcademicSemester = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { semesterId } = req.params;
    const payload = req.body;
    const result = yield academicSemester_services_1.AcademicSemseterServices.updateAAcademicSemesterFromDB(semesterId, payload);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "Successfully updated single academic-semester data",
        statusCode: http_status_1.default.OK,
        data: result
    });
}));
exports.AcademicSemseterController = {
    createAcademicSemester,
    getAllAcademicSemester,
    getSingleAcademicSemester,
    updateSingleAcademicSemester
};
