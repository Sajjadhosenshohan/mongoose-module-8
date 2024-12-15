"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const validator_1 = __importDefault(require("validator"));
const bcrypt_1 = __importDefault(require("bcrypt"));
// import config from '../..';
const userSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        trim: true, // Removes whitespace
        minLength: [2, 'First name must be at least 2 characters long'],
        // Validate field using a custom validator function
        validate: {
            validator: function (value) {
                const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
                return firstNameStr === value && value.trim().length > 0;
            },
            message: (props) => `${props.value} is not a valid first name!`,
        },
    },
    middleName: {
        type: String,
        required: [true, 'Middle name is required'],
        trim: true,
        minLength: [2, 'Middle name must be at least 2 characters long'],
        validate: {
            validator: (value) => validator_1.default.isAlpha(value),
            message: (props) => `${props.value} is not a valid middle name!`,
        }
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
        trim: true,
        minLength: [2, 'Last name must be at least 2 characters long'],
    },
});
const guardianSchema = new mongoose_1.Schema({
    fatherName: {
        type: String,
        required: [true, 'Father\'s name is required'],
        minLength: [3, 'Father\'s name must be at least 3 characters long'],
    },
    fatherOccupation: { type: String, required: [true, 'Father\'s occupation is required'] },
    fatherContactNo: {
        type: String,
        required: [true, 'Father\'s contact number is required'],
        validate: {
            validator: (v) => /\d{10}/.test(v.toString()), // Validates 10-digit number
            message: (props) => `${props.value} is not a valid 10-digit phone number!`
        }
    },
    motherName: {
        type: String,
        required: [true, 'Mother\'s name is required'],
        minLength: [3, 'Mother\'s name must be at least 3 characters long'],
    },
    motherOccupation: { type: String, required: [true, 'Mother\'s occupation is required'] },
    motherContactNo: {
        type: String,
        required: [true, 'Mother\'s contact number is required'],
        validate: {
            validator: (v) => /\d{10}/.test(v.toString()),
            message: (props) => `${props.value} is not a valid 10-digit phone number!`
        }
    },
});
const localGuardianSchema = new mongoose_1.Schema({
    name: { type: String, required: [true, 'Local guardian\'s name is required'] },
    occupation: { type: String, required: [true, 'Occupation is required'] },
    contactNo: {
        type: String,
        required: [true, 'Contact number is required'],
        // validate: {
        //   validator: (v: number) => /\d{10}/.test(v.toString()),
        //   message: (props) => `${props.value} is not a valid 10-digit phone number!`
        // }
        validate: {
            validator: (v) => /\d{10}/.test(v.toString()),
            message: (props) => `${props.value} is not a valid 10-digit phone number!`
        }
    },
    address: { type: String, required: [true, 'Address is required'] },
});
const studentSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: [true, 'ID is required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    name: {
        type: userSchema,
        required: true,
    },
    gender: {
        type: String,
        enum: {
            values: ['male', 'female', 'others'],
            message: '{VALUE} is not supported',
        },
        required: [true, 'Gender is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'], // Email validation
    },
    contactNo: {
        type: String,
        required: [true, 'Contact number is required'],
        validate: {
            validator: (v) => /\d{10}/.test(v), // Validates 10-digit phone number
            message: (props) => `${props.value} is not a valid 10-digit phone number!`,
        },
    },
    emergencyContactNo: {
        type: String,
        required: [true, 'Emergency contact number is required'],
        validate: {
            validator: (v) => /\d{10}/.test(v.toString()), // Validates 10-digit number
            message: (props) => `${props.value} is not a valid 10-digit phone number!`,
        },
    },
    bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        message: '{VALUE} is not a valid blood group',
    },
    presentAddress: {
        type: String,
        required: [true, 'Present address is required'],
    },
    permanentAddress: {
        type: String,
        required: [true, 'Permanent address is required'],
    },
    guardian: {
        type: guardianSchema,
        required: true,
    },
    LocalGuardian: {
        type: localGuardianSchema,
        required: true,
    },
    profileImg: {
        type: String,
        validate: {
            validator: (v) => /^(http|https):\/\/[^ "]+$/.test(v), // URL validation
            message: (props) => `${props.value} is not a valid URL!`,
        },
    },
    isActive: {
        type: String,
        enum: ['active', 'blocked'],
        default: 'active',
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    toJSON: {
        virtuals: true
    }
});
// virtual
studentSchema.virtual('fullName').get(function () {
    return this.name.firstName + this.name.middleName + this.name.lastName;
});
// pre save middleware 
studentSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const user = this;
        user.password = yield bcrypt_1.default.hash(user.password, 12);
        next();
    });
});
// post save middleware
studentSchema.post('save', function (doc, next) {
    doc.password = '';
    next();
});
// query middleware 
studentSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
// query middleware 
studentSchema.pre('findOne', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
studentSchema.pre('aggregate', function (next) {
    this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
    next();
});
const StudentModel = (0, mongoose_1.model)('Student', studentSchema);
exports.default = StudentModel;
