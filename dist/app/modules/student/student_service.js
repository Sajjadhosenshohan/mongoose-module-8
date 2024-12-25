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
const student_model_1 = __importDefault(require("./student_model"));
// get all student info 
const getAllStudentsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.default.find();
    return result;
});
// get a student info by id
const getAStudentInfo = (studentId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.default.findOne({ id: studentId });
    return result;
});
// delete a student info by id
const deleteStudentInfo = (studentId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.default.updateOne({ id: studentId }, { isDeleted: true });
    return result;
});
exports.StudentServices = {
    getAllStudentsFromDB,
    getAStudentInfo,
    deleteStudentInfo
};
