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
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatedStudentId = void 0;
const user_model_1 = require("./user.model");
// find last student id
const findStudentId = () => __awaiter(void 0, void 0, void 0, function* () {
    const lastStudent = yield user_model_1.User.findOne({
        role: "student"
    }).select({ id: 1, _id: 0 }).sort({ createdAt: -1 }).lean();
    if (lastStudent === null || lastStudent === void 0 ? void 0 : lastStudent.id) {
        return lastStudent === null || lastStudent === void 0 ? void 0 : lastStudent.id;
    }
    return undefined;
});
const generatedStudentId = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // first time 0000
    let currentId = (0).toString();
    // 2030 02 0001
    const lastStudentId = yield findStudentId();
    const lastStudentYear = lastStudentId === null || lastStudentId === void 0 ? void 0 : lastStudentId.substring(0, 4);
    const lastStudentSemesterCode = lastStudentId === null || lastStudentId === void 0 ? void 0 : lastStudentId.substring(4, 6);
    // current year and code
    const currentSemesterCode = payload.code;
    const currentYear = payload.year;
    if (lastStudentId && lastStudentSemesterCode === currentSemesterCode && lastStudentYear === currentYear) {
        currentId = lastStudentId.substring(6);
    }
    let incrementId = (parseInt(currentId) + 1).toString().padStart(4, '0');
    incrementId = `${payload.year}${payload.code}${incrementId}`;
    return incrementId;
});
exports.generatedStudentId = generatedStudentId;
