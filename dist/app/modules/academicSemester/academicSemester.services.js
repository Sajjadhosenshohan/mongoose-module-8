"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemseterServices = void 0;
const academicSemester_constant_1 = require("./academicSemester.constant");
const academicSemester_model_1 = require("./academicSemester.model");
const createAcademicSemesterIntoDB = (payload) => {
    // NameCodeMapper[payload.name] its the value of the key that checking payload.code value
    if (academicSemester_constant_1.NameCodeMapper[payload.name] !== payload.code) {
        throw new Error("Invalid Semester Code");
    }
    const result = academicSemester_model_1.AcademicSemesterModel.create(payload);
    return result;
};
const getAllAcademicSemesterFromDB = () => {
    const result = academicSemester_model_1.AcademicSemesterModel.find({});
    return result;
};
const getSingleAcademicSemesterFromDB = (semesterId) => {
    const result = academicSemester_model_1.AcademicSemesterModel.findById({ _id: semesterId });
    return result;
};
const updateAAcademicSemesterFromDB = (semesterId, payload) => {
    if (payload.name && payload.code && academicSemester_constant_1.NameCodeMapper[payload.name] !== payload.code) {
        throw new Error("Invalid semester code!");
    }
    const result = academicSemester_model_1.AcademicSemesterModel.findByIdAndUpdate({ _id: semesterId }, { $set: payload }, { new: true, runValidators: true });
    return result;
};
exports.AcademicSemseterServices = {
    createAcademicSemesterIntoDB,
    getAllAcademicSemesterFromDB,
    getSingleAcademicSemesterFromDB,
    updateAAcademicSemesterFromDB
};
