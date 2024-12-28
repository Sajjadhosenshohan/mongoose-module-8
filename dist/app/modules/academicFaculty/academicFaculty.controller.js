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
exports.AcademicFacultyController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utiles/catchAsync"));
const sendResponse_1 = require("../../utiles/sendResponse");
const academicFaculty_services_1 = require("./academicFaculty.services");
const createAcademicFaculty = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const result = yield academicFaculty_services_1.AcademicFacultyServices.createAcademicFacultyIntoDB(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "Successfully created academi faculty",
        statusCode: http_status_1.default.OK,
        data: result
    });
}));
const getAllAcademicFaculties = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicFaculty_services_1.AcademicFacultyServices.getAllAcademicFacultyFromDB();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "Successfully get all academic faculties data",
        statusCode: http_status_1.default.OK,
        data: result
    });
}));
const getSingleAcademicFaculty = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { facultyId } = req.params;
    const result = yield academicFaculty_services_1.AcademicFacultyServices.getSingleAcademicFacultyFromDB(facultyId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "Successfully get single academicFaculty data",
        statusCode: http_status_1.default.OK,
        data: result
    });
}));
const updateSingleAcademicFaculty = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { facultyId } = req.params;
    const payload = req.body;
    const result = yield academicFaculty_services_1.AcademicFacultyServices.updateAAcademicFacultyFromDB(facultyId, payload);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "Successfully updated single academic-semester data",
        statusCode: http_status_1.default.OK,
        data: result
    });
}));
exports.AcademicFacultyController = {
    createAcademicFaculty,
    getAllAcademicFaculties,
    getSingleAcademicFaculty,
    updateSingleAcademicFaculty
};
