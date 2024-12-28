"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicFacultyServices = void 0;
const academicFaculty_model_1 = require("./academicFaculty.model");
const createAcademicFacultyIntoDB = (payload) => {
    const result = academicFaculty_model_1.AcademicFacultyModel.create(payload);
    return result;
};
const getAllAcademicFacultyFromDB = () => {
    const result = academicFaculty_model_1.AcademicFacultyModel.find({});
    return result;
};
const getSingleAcademicFacultyFromDB = (semesterId) => {
    const result = academicFaculty_model_1.AcademicFacultyModel.findById({ _id: semesterId });
    return result;
};
const updateAAcademicFacultyFromDB = (semesterId, payload) => {
    const result = academicFaculty_model_1.AcademicFacultyModel.findByIdAndUpdate({ _id: semesterId }, { $set: payload }, { new: true, runValidators: true });
    return result;
};
exports.AcademicFacultyServices = {
    createAcademicFacultyIntoDB,
    getAllAcademicFacultyFromDB,
    getSingleAcademicFacultyFromDB,
    updateAAcademicFacultyFromDB,
};
