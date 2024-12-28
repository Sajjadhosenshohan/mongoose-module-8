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
exports.StudentServices = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const student_model_1 = __importDefault(require("./student_model"));
const AppError_1 = require("../../errors/AppError");
const user_model_1 = require("../users/user.model");
// get all student info
const getAllStudentsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.default.find()
        .populate('admissionSemester')
        .populate({
        path: 'academicDepartment',
        populate: {
            path: 'academicFaculty',
        },
    });
    return result;
});
// get a student info by id
const getAStudentInfo = (studentId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.default.findOne({ id: studentId })
        .populate('admissionSemester')
        .populate({
        path: 'academicDepartment',
        populate: {
            path: 'academicFaculty',
        },
    });
    return result;
});
// delete a student info by id
const deleteStudentInfo = (studentId) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        const deleteStudent = yield student_model_1.default.findOneAndUpdate({ id: studentId }, { isDeleted: true }, { new: true, session });
        if (!deleteStudent) {
            throw new AppError_1.AppError(httpStatus.BAD_REQUEST, 'Failed to delete student');
        }
        const deleteUser = yield user_model_1.User.findOneAndUpdate({ id: studentId }, { isDeleted: true }, { new: true, session });
        if (!deleteUser) {
            throw new AppError_1.AppError(httpStatus.BAD_REQUEST, 'Failed to delete user');
        }
        yield session.commitTransaction();
        yield session.endSession();
        return deleteStudent;
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        // Ensure the error is an instance of Error or provide a default message
        if (error instanceof Error) {
            throw new AppError_1.AppError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
        }
        else {
            throw new AppError_1.AppError(httpStatus.INTERNAL_SERVER_ERROR, 'An unknown error occurred');
        }
    }
});
exports.StudentServices = {
    getAllStudentsFromDB,
    getAStudentInfo,
    deleteStudentInfo,
};
