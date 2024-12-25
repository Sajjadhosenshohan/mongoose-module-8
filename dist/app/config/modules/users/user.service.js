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
const __1 = __importDefault(require("../.."));
const student_model_1 = __importDefault(require("../student/student_model"));
const user_model_1 = require("./user.model");
const createStudentInfoDB = (password, studentData) => __awaiter(void 0, void 0, void 0, function* () {
    // create a user object
    const userData = {};
    // if password is not given , use default password
    userData.password = password || __1.default.default_password;
    // set student role
    userData.role = 'student';
    // set manually generated id
    userData.id = '203010009';
    // create a user
    const newUser = yield user_model_1.User.create(userData);
    // create a student user
    if (Object.keys(newUser).length) {
        // set id and _id as user
        studentData.id = newUser.id;
        studentData.user = newUser._id; // reference _id
        const newStudent = yield student_model_1.default.create(studentData);
        return newStudent;
    }
});
exports.UserServices = {
    createStudentInfoDB
};