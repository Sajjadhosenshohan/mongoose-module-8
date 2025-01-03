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
exports.AcademicSemesterModel = void 0;
const mongoose_1 = require("mongoose");
const academicSemester_constant_1 = require("./academicSemester.constant");
const AcademicSemesterSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Semester name is required"],
        enum: academicSemester_constant_1.AcademicSemesterName
    },
    year: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: [true, "code is required"],
        enum: academicSemester_constant_1.AcademicSemesterCode
    },
    startMonth: {
        type: String,
        enum: academicSemester_constant_1.Months,
        required: true
    },
    endMonth: {
        type: String,
        enum: academicSemester_constant_1.Months,
        required: true
    }
});
// year and name checking
AcademicSemesterSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const isSemesterExist = yield exports.AcademicSemesterModel.findOne({
            year: this.year,
            name: this.name
        });
        if (isSemesterExist) {
            throw new Error(`This semester already exist`);
        }
        next();
    });
});
exports.AcademicSemesterModel = (0, mongoose_1.model)('AcademicSemester', AcademicSemesterSchema);
