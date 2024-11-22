
import Joi from 'joi';

// Joi validation schema for UserName
const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .min(2)
    .required()
    .pattern(/^[A-Z][a-z]+$/) // First letter capital, remaining lowercase
    .messages({
      'string.min': 'First name must be at least 2 characters long',
      'string.pattern.base': 'First name must start with a capital letter',
      'any.required': 'First name is required',
    }),

  middleName: Joi.string()
    .trim()
    .min(2)
    .required()
    .pattern(/^[a-zA-Z]+$/) // Only alphabetic characters
    .messages({
      'string.min': 'Middle name must be at least 2 characters long',
      'string.pattern.base': 'Middle name must contain only alphabetic characters',
      'any.required': 'Middle name is required',
    }),

  lastName: Joi.string()
    .trim()
    .min(2)
    .required()
    .messages({
      'string.min': 'Last name must be at least 2 characters long',
      'any.required': 'Last name is required',
    }),
});

// Joi validation schema for Guardian
const guardianValidationSchema = Joi.object({
  fatherName: Joi.string()
    .min(3)
    .required()
    .messages({
      'string.min': "Father's name must be at least 3 characters long",
      'any.required': "Father's name is required",
    }),

  fatherOccupation: Joi.string()
    .required()
    .messages({
      'any.required': "Father's occupation is required",
    }),

  fatherContactNo: Joi.string()
    .length(10)
    .pattern(/^\d{10}$/) // 10-digit number
    .required()
    .messages({
      'string.pattern.base': 'Father\'s contact number must be a valid 10-digit number',
      'any.required': 'Father\'s contact number is required',
    }),

  motherName: Joi.string()
    .min(3)
    .required()
    .messages({
      'string.min': "Mother's name must be at least 3 characters long",
      'any.required': "Mother's name is required",
    }),

  motherOccupation: Joi.string()
    .required()
    .messages({
      'any.required': "Mother's occupation is required",
    }),

  motherContactNo: Joi.string()
    .length(10)
    .pattern(/^\d{10}$/)
    .required()
    .messages({
      'string.pattern.base': 'Mother\'s contact number must be a valid 10-digit number',
      'any.required': 'Mother\'s contact number is required',
    }),
});

// Joi validation schema for LocalGuardian
const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'Local guardian\'s name is required',
  }),

  occupation: Joi.string().required().messages({
    'any.required': 'Occupation is required',
  }),

  contactNo: Joi.string()
    .length(10)
    .pattern(/^\d{10}$/)
    .required()
    .messages({
      'string.pattern.base': 'Contact number must be a valid 10-digit number',
      'any.required': 'Contact number is required',
    }),

  address: Joi.string().required().messages({
    'any.required': 'Address is required',
  }),
});

// Joi validation schema for Student
const studentJoi_Validate_Schema  = Joi.object({
  id: Joi.string().required().messages({
    'any.required': 'ID is required',
  }),

  name: userNameValidationSchema.required().messages({
    'any.required': 'Name is required',
  }),

  gender: Joi.string()
    .valid('male', 'female', 'others')
    .required()
    .messages({
      'any.only': '{#value} is not a supported gender',
      'any.required': 'Gender is required',
    }),

  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.email': 'Please enter a valid email address',
      'any.required': 'Email is required',
    }),

  contactNo: Joi.string()
    .length(10)
    .pattern(/^\d{10}$/)
    .required()
    .messages({
      'string.pattern.base': 'Contact number must be a valid 10-digit number',
      'any.required': 'Contact number is required',
    }),

  emergencyContactNo: Joi.string()
    .length(10)
    .pattern(/^\d{10}$/)
    .required()
    .messages({
      'string.pattern.base': 'Emergency contact number must be a valid 10-digit number',
      'any.required': 'Emergency contact number is required',
    }),

  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .messages({
      'any.only': '{#value} is not a valid blood group',
    }),

  presentAddress: Joi.string().required().messages({
    'any.required': 'Present address is required',
  }),

  permanentAddress: Joi.string().required().messages({
    'any.required': 'Permanent address is required',
  }),

  guardian: guardianValidationSchema.required().messages({
    'any.required': 'Guardian information is required',
  }),

  LocalGuardian: localGuardianValidationSchema.required().messages({
    'any.required': 'Local guardian information is required',
  }),

  profileImg: Joi.string()
    .uri()
    .messages({
      'string.uri': 'Profile image must be a valid URL',
    }),

  isActive: Joi.string()
    .valid('active', 'blocked')
    .default('active')
    .messages({
      'any.only': '{#value} is not valid, must be "active" or "blocked"',
    }),
});



export default studentJoi_Validate_Schema;