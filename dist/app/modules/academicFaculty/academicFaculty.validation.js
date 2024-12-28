"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicFacultyValidation = void 0;
const zod_1 = require("zod");
const createAcademicFaculty = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            invalid_type_error: "Academic Faculty must be string"
        })
    }),
});
const updateAcademicFaculty = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            invalid_type_error: "Academic Faculty must be string"
        })
    }),
});
exports.AcademicFacultyValidation = {
    createAcademicFaculty,
    updateAcademicFaculty
};
