"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemesters = void 0;
const zod_1 = require("zod");
const academicSemester_constant_1 = require("./academicSemester.constant");
const createAcademicSemesterValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.enum([...academicSemester_constant_1.AcademicSemesterName]),
        code: zod_1.z.enum([...academicSemester_constant_1.AcademicSemesterCode]),
        year: zod_1.z.string(),
        startMonth: zod_1.z.enum([...academicSemester_constant_1.Months]),
        endMonth: zod_1.z.enum([...academicSemester_constant_1.Months])
    }),
});
const updateAcademicSemesterValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.enum([...academicSemester_constant_1.AcademicSemesterName]).optional(),
        code: zod_1.z.enum([...academicSemester_constant_1.AcademicSemesterCode]).optional(),
        year: zod_1.z.string().optional(),
        startMonth: zod_1.z.enum([...academicSemester_constant_1.Months]).optional(),
        endMonth: zod_1.z.enum([...academicSemester_constant_1.Months]).optional()
    }),
});
exports.AcademicSemesters = {
    createAcademicSemesterValidation,
    updateAcademicSemesterValidation
};
