import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student_interface';
import validator from 'validator';

const userSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true, // Removes whitespace
    minLength: [2, 'First name must be at least 2 characters long'],

    // Validate field using a custom validator function
    validate: {
      validator: function (value: string): boolean {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameStr === value && value.trim().length > 0;
      },
      message: (props: any) => `${props.value} is not a valid first name!`,
    },
  },
  middleName: {
    type: String,
    required: [true, 'Middle name is required'],
    trim: true,
    minLength: [2, 'Middle name must be at least 2 characters long'],

    validate: {
      validator: (value) => validator.isAlpha(value),
      message: (props: any) => `${props.value} is not a valid middle name!`,
    },
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    minLength: [2, 'Last name must be at least 2 characters long'],
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: [true, "Father's name is required"],
    minLength: [3, "Father's name must be at least 3 characters long"],
  },
  fatherOccupation: {
    type: String,
    required: [true, "Father's occupation is required"],
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father's contact number is required"],
    validate: {
      validator: (v: number) => /\d{10}/.test(v.toString()), // Validates 10-digit number
      message: (props) =>
        `${props.value} is not a valid 10-digit phone number!`,
    },
  },
  motherName: {
    type: String,
    required: [true, "Mother's name is required"],
    minLength: [3, "Mother's name must be at least 3 characters long"],
  },
  motherOccupation: {
    type: String,
    required: [true, "Mother's occupation is required"],
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother's contact number is required"],
    validate: {
      validator: (v: number) => /\d{10}/.test(v.toString()),
      message: (props) =>
        `${props.value} is not a valid 10-digit phone number!`,
    },
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: [true, "Local guardian's name is required"] },
  occupation: { type: String, required: [true, 'Occupation is required'] },
  contactNo: {
    type: String,
    required: [true, 'Contact number is required'],
    // validate: {
    //   validator: (v: number) => /\d{10}/.test(v.toString()),
    //   message: (props) => `${props.value} is not a valid 10-digit phone number!`
    // }
    validate: {
      validator: (v: number) => /\d{10}/.test(v.toString()),
      message: (props) =>
        `${props.value} is not a valid 10-digit phone number!`,
    },
  },
  address: { type: String, required: [true, 'Address is required'] },
});

const studentSchema = new Schema<Student>(
  {
    id: {
      type: String,
      required: [true, 'ID is required'],
      unique: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User ID is required'],
      unique: true,
      ref: 'User',
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
        validator: (v: string) => /\d{10}/.test(v), // Validates 10-digit phone number
        message: (props) =>
          `${props.value} is not a valid 10-digit phone number!`,
      },
    },
    emergencyContactNo: {
      type: String,
      required: [true, 'Emergency contact number is required'],
      validate: {
        validator: (v: number) => /\d{10}/.test(v.toString()), // Validates 10-digit number
        message: (props) =>
          `${props.value} is not a valid 10-digit phone number!`,
      },
    },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: '{VALUE} is not a valid blood group',
    },
    dateOfBirth: {
      type: Date
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
        validator: (v: string) => /^(http|https):\/\/[^ "]+$/.test(v), // URL validation
        message: (props) => `${props.value} is not a valid URL!`,
      },
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

// virtual
studentSchema.virtual('fullName').get(function () {
  return this.name.firstName + this.name.middleName + this.name.lastName;
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

const StudentModel = model<Student>('Student', studentSchema);

export default StudentModel;