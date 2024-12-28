"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicDepartmentServices = void 0;
const acedemicDepartment_model_1 = require("./acedemicDepartment.model");
const createAcademicDepartmentIntoDB = (payload) => {
    const result = acedemicDepartment_model_1.AcademicDepartmentModel.create(payload);
    return result;
};
const getAllAcademicDepartmentFromDB = () => {
    const result = acedemicDepartment_model_1.AcademicDepartmentModel.find({}).populate("academicFaculty");
    return result;
};
const getSingleAcademicDepartmentFromDB = (departmentId) => {
    const result = acedemicDepartment_model_1.AcademicDepartmentModel.findById({ _id: departmentId }).populate("academicFaculty");
    return result;
};
const updateAAcademicDepartmentFromDB = (departmentId, payload) => {
    const result = acedemicDepartment_model_1.AcademicDepartmentModel.findOneAndUpdate({ _id: departmentId }, { $set: payload }, { new: true, runValidators: true });
    return result;
};
exports.AcademicDepartmentServices = {
    createAcademicDepartmentIntoDB,
    getAllAcademicDepartmentFromDB,
    getSingleAcademicDepartmentFromDB,
    updateAAcademicDepartmentFromDB,
};
