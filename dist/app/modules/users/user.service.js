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
exports.UserServices = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../../config"));
const academicSemester_model_1 = require("../academicSemester/academicSemester.model");
const student_model_1 = __importDefault(require("../student/student_model"));
const user_model_1 = require("./user.model");
const user_utils_1 = require("./user.utils");
const AppError_1 = require("../../errors/AppError");
const createStudentInfoDB = (password, studentData) => __awaiter(void 0, void 0, void 0, function* () {
    // create a user object
    const userData = {};
    // if password is not given , use default password
    userData.password = password || config_1.default.default_password;
    // set student role
    userData.role = 'student';
    // find academic semester info
    const admissionSemester = (yield academicSemester_model_1.AcademicSemesterModel.findById(studentData.admissionSemester));
    if (!admissionSemester) {
        throw new Error('Admission semester not found!');
    }
    // start session
    const session = yield mongoose_1.default.startSession();
    try {
        // start transaction
        session.startTransaction();
        // set generated generated id
        userData.id = yield (0, user_utils_1.generatedStudentId)(admissionSemester);
        // create a user (transaction -1 )
        const newUser = yield user_model_1.User.create([userData], { session });
        if (!newUser.length) {
            throw new AppError_1.AppError(httpStatus.BAD_REQUEST, "Failed to create user");
        }
        // set id and _id as user
        studentData.id = newUser[0].id;
        studentData.user = newUser[0]._id; // reference _id
        // create a student user (transaction -2)
        const newStudent = yield student_model_1.default.create([studentData], { session });
        if (!newStudent.length) {
            throw new AppError_1.AppError(httpStatus.BAD_REQUEST, "Failed to create student");
        }
        // session commit and end korlam
        yield session.commitTransaction();
        yield session.endSession();
        return newStudent;
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
    }
});
exports.UserServices = {
    createStudentInfoDB,
};
