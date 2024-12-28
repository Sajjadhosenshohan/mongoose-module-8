"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStudentSchemaValidation = void 0;
const validator_1 = __importDefault(require("validator"));
const zod_1 = require("zod");
// Define user schema using Zod
const userValidationSchema = zod_1.z.object({
    firstName: zod_1.z
        .string()
        .min(2, 'First name must be at least 2 characters long')
        .trim()
        .refine((value) => value.charAt(0).toUpperCase() + value.slice(1) === value, 'First name must start with an uppercase letter'),
    middleName: zod_1.z
        .string()
        .min(2, 'Middle name must be at least 2 characters long')
        .trim()
        .refine(validator_1.default.isAlpha, {
        message: 'Middle name must contain only letters',
    }),
    lastName: zod_1.z
        .string()
        .min(2, 'Last name must be at least 2 characters long')
        .trim(),
});
// Define guardian schema using Zod
const guardianValidationSchema = zod_1.z.object({
    fatherName: zod_1.z
        .string()
        .min(3, "Father's name must be at least 3 characters long"),
    fatherOccupation: zod_1.z.string(),
    fatherContactNo: zod_1.z
        .string()
        .refine((v) => /^\d{10}$/.test(v), "Father's contact number must be a valid 10-digit phone number"),
    motherName: zod_1.z
        .string()
        .min(3, "Mother's name must be at least 3 characters long"),
    motherOccupation: zod_1.z.string(),
    motherContactNo: zod_1.z
        .string()
        .refine((v) => /^\d{10}$/.test(v), "Mother's contact number must be a valid 10-digit phone number"),
});
// Define local guardian schema using Zod
const localGuardianValidationSchemaZod = zod_1.z.object({
    name: zod_1.z.string(),
    occupation: zod_1.z.string(),
    contactNo: zod_1.z
        .string()
        .refine((v) => /^\d{10}$/.test(v), 'Contact number must be a valid 10-digit phone number'),
    address: zod_1.z.string(),
});
// Define student schema using Zod
const createStudentSchemaValidation = zod_1.z.object({
    body: zod_1.z.object({
        password: zod_1.z.string(),
        student: zod_1.z.object({
            name: userValidationSchema,
            gender: zod_1.z.enum(['male', 'female', 'others']),
            email: zod_1.z.string().email('Invalid email address'),
            dateOfBirth: zod_1.z.string().optional(),
            contactNo: zod_1.z
                .string()
                .refine((v) => /^\d{10}$/.test(v), 'Contact number must be a valid 10-digit phone number'),
            emergencyContactNo: zod_1.z
                .string()
                .refine((v) => /^\d{10}$/.test(v), 'Emergency contact number must be a valid 10-digit phone number'),
            bloodGroup: zod_1.z
                .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
                .optional(),
            presentAddress: zod_1.z.string(),
            permanentAddress: zod_1.z.string(),
            guardian: guardianValidationSchema,
            LocalGuardian: localGuardianValidationSchemaZod,
            admissionSemester: zod_1.z.string(),
            academicDepartment: zod_1.z.string(),
            profileImg: zod_1.z.string().url('Invalid image URL').optional()
        })
    }),
});
exports.createStudentSchemaValidation = createStudentSchemaValidation;
