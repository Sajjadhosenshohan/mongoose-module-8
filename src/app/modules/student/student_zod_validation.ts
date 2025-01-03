import validator from 'validator';
import { z } from 'zod';

// Define user schema using Zod
const userValidationSchema = z.object({
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters long')
    .trim()
    .refine(
      (value) => value.charAt(0).toUpperCase() + value.slice(1) === value,
      'First name must start with an uppercase letter',
    ),

  middleName: z
    .string()
    .min(2, 'Middle name must be at least 2 characters long')
    .trim()
    .refine(validator.isAlpha, {
      message: 'Middle name must contain only letters',
    }),

  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters long')
    .trim(),
});

// Define guardian schema using Zod
const guardianValidationSchema = z.object({
  fatherName: z
    .string()
    .min(3, "Father's name must be at least 3 characters long"),
  fatherOccupation: z.string(),
  fatherContactNo: z
    .string()
    .refine(
      (v) => /^\d{10}$/.test(v),
      "Father's contact number must be a valid 10-digit phone number",
    ),
  motherName: z
    .string()
    .min(3, "Mother's name must be at least 3 characters long"),
  motherOccupation: z.string(),
  motherContactNo: z
    .string()
    .refine(
      (v) => /^\d{10}$/.test(v),
      "Mother's contact number must be a valid 10-digit phone number",
    ),
});

// Define local guardian schema using Zod
const localGuardianValidationSchemaZod = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z
    .string()
    .refine(
      (v) => /^\d{10}$/.test(v),
      'Contact number must be a valid 10-digit phone number',
    ),
  address: z.string(),
});

// Define student schema using Zod
const createStudentSchemaValidation = z.object({
  body: z.object({
    password: z.string(),
    student: z.object({
    name: userValidationSchema,
    gender: z.enum(['male', 'female', 'others']),
    email: z.string().email('Invalid email address'),
    dateOfBirth: z.string().optional(),
    contactNo: z
      .string()
      .refine(
        (v) => /^\d{10}$/.test(v),
        'Contact number must be a valid 10-digit phone number',
      ),
    emergencyContactNo: z
      .string()
      .refine(
        (v) => /^\d{10}$/.test(v),
        'Emergency contact number must be a valid 10-digit phone number',
      ),
    bloodGroup: z
      .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
      .optional(),
    presentAddress: z.string(),
    permanentAddress: z.string(),
    guardian: guardianValidationSchema,
    LocalGuardian: localGuardianValidationSchemaZod,
    admissionSemester: z.string(),
    academicDepartment: z.string(),
    profileImg: z.string().url('Invalid image URL').optional()
    })
  }),
});

// Export the Zod schema for validation
export { createStudentSchemaValidation };
