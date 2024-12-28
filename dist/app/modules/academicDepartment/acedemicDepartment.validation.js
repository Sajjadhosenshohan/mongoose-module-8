"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicDepartmentValidation = void 0;
const zod_1 = require("zod");
const createAcademicDepartment = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            invalid_type_error: "Academic department must be string",
            required_error: "Academic Department is required"
        }),
        academicFaculty: zod_1.z.string({
            invalid_type_error: "Academic faculty must be string",
            required_error: "Academic faculty is required"
        })
    }),
});
const updateAcademicDepartment = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            invalid_type_error: "Academic department must be string",
            required_error: "Academic Department is required"
        }).optional(),
        academicFaculty: zod_1.z.string({
            invalid_type_error: "Academic faculty must be string",
            required_error: "Academic faculty is required"
        }).optional()
    }),
});
exports.AcademicDepartmentValidation = {
    createAcademicDepartment,
    updateAcademicDepartment
};
