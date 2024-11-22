"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
// Joi validation schema for UserName
const userNameValidationSchema = joi_1.default.object({
    firstName: joi_1.default.string()
        .trim()
        .min(2)
        .required()
        .pattern(/^[A-Z][a-z]+$/) // First letter capital, remaining lowercase
        .messages({
        'string.min': 'First name must be at least 2 characters long',
        'string.pattern.base': 'First name must start with a capital letter',
        'any.required': 'First name is required',
    }),
    middleName: joi_1.default.string()
        .trim()
        .min(2)
        .required()
        .pattern(/^[a-zA-Z]+$/) // Only alphabetic characters
        .messages({
        'string.min': 'Middle name must be at least 2 characters long',
        'string.pattern.base': 'Middle name must contain only alphabetic characters',
        'any.required': 'Middle name is required',
    }),
    lastName: joi_1.default.string()
        .trim()
        .min(2)
        .required()
        .messages({
        'string.min': 'Last name must be at least 2 characters long',
        'any.required': 'Last name is required',
    }),
});
// Joi validation schema for Guardian
const guardianValidationSchema = joi_1.default.object({
    fatherName: joi_1.default.string()
        .min(3)
        .required()
        .messages({
        'string.min': "Father's name must be at least 3 characters long",
        'any.required': "Father's name is required",
    }),
    fatherOccupation: joi_1.default.string()
        .required()
        .messages({
        'any.required': "Father's occupation is required",
    }),
    fatherContactNo: joi_1.default.string()
        .length(10)
        .pattern(/^\d{10}$/) // 10-digit number
        .required()
        .messages({
        'string.pattern.base': 'Father\'s contact number must be a valid 10-digit number',
        'any.required': 'Father\'s contact number is required',
    }),
    motherName: joi_1.default.string()
        .min(3)
        .required()
        .messages({
        'string.min': "Mother's name must be at least 3 characters long",
        'any.required': "Mother's name is required",
    }),
    motherOccupation: joi_1.default.string()
        .required()
        .messages({
        'any.required': "Mother's occupation is required",
    }),
    motherContactNo: joi_1.default.string()
        .length(10)
        .pattern(/^\d{10}$/)
        .required()
        .messages({
        'string.pattern.base': 'Mother\'s contact number must be a valid 10-digit number',
        'any.required': 'Mother\'s contact number is required',
    }),
});
// Joi validation schema for LocalGuardian
const localGuardianValidationSchema = joi_1.default.object({
    name: joi_1.default.string().required().messages({
        'any.required': 'Local guardian\'s name is required',
    }),
    occupation: joi_1.default.string().required().messages({
        'any.required': 'Occupation is required',
    }),
    contactNo: joi_1.default.string()
        .length(10)
        .pattern(/^\d{10}$/)
        .required()
        .messages({
        'string.pattern.base': 'Contact number must be a valid 10-digit number',
        'any.required': 'Contact number is required',
    }),
    address: joi_1.default.string().required().messages({
        'any.required': 'Address is required',
    }),
});
// Joi validation schema for Student
const studentJoi_Validate_Schema = joi_1.default.object({
    id: joi_1.default.string().required().messages({
        'any.required': 'ID is required',
    }),
    name: userNameValidationSchema.required().messages({
        'any.required': 'Name is required',
    }),
    gender: joi_1.default.string()
        .valid('male', 'female', 'others')
        .required()
        .messages({
        'any.only': '{#value} is not a supported gender',
        'any.required': 'Gender is required',
    }),
    email: joi_1.default.string()
        .email()
        .required()
        .messages({
        'string.email': 'Please enter a valid email address',
        'any.required': 'Email is required',
    }),
    contactNo: joi_1.default.string()
        .length(10)
        .pattern(/^\d{10}$/)
        .required()
        .messages({
        'string.pattern.base': 'Contact number must be a valid 10-digit number',
        'any.required': 'Contact number is required',
    }),
    emergencyContactNo: joi_1.default.string()
        .length(10)
        .pattern(/^\d{10}$/)
        .required()
        .messages({
        'string.pattern.base': 'Emergency contact number must be a valid 10-digit number',
        'any.required': 'Emergency contact number is required',
    }),
    bloodGroup: joi_1.default.string()
        .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
        .messages({
        'any.only': '{#value} is not a valid blood group',
    }),
    presentAddress: joi_1.default.string().required().messages({
        'any.required': 'Present address is required',
    }),
    permanentAddress: joi_1.default.string().required().messages({
        'any.required': 'Permanent address is required',
    }),
    guardian: guardianValidationSchema.required().messages({
        'any.required': 'Guardian information is required',
    }),
    LocalGuardian: localGuardianValidationSchema.required().messages({
        'any.required': 'Local guardian information is required',
    }),
    profileImg: joi_1.default.string()
        .uri()
        .messages({
        'string.uri': 'Profile image must be a valid URL',
    }),
    isActive: joi_1.default.string()
        .valid('active', 'blocked')
        .default('active')
        .messages({
        'any.only': '{#value} is not valid, must be "active" or "blocked"',
    }),
});
exports.default = studentJoi_Validate_Schema;
