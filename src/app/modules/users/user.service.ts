/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from 'mongoose';
import config from '../../config';
import { AcademicSemesterModel } from '../academicSemester/academicSemester.model';
import { TAcademicSemister } from '../academicSemester/academicSemester_interface';
import { Student } from '../student/student_interface';
import StudentModel from '../student/student_model';
import { NewUser } from './user.interface';
import { User } from './user.model';
import { generatedStudentId } from './user.utils';
import { AppError } from '../../errors/AppError';

const createStudentInfoDB = async (password: string, studentData: Student) => {
  // create a user object
  const userData = {} as NewUser;

  // if password is not given , use default password
  userData.password = password || (config.default_password as string);

  // set student role
  userData.role = 'student';

  // find academic semester info
  const admissionSemester = (await AcademicSemesterModel.findById(
    studentData.admissionSemester,
  )) as TAcademicSemister;

  if (!admissionSemester) {
    throw new Error('Admission semester not found!');
  }

  // start session
  const session = await mongoose.startSession();

  try {
    // start transaction
    session.startTransaction();

    // set generated generated id
    userData.id = await generatedStudentId(admissionSemester);

    // create a user (transaction -1 )
    const newUser = await User.create([userData], {session});

    if (!newUser.length) {
        throw new AppError(httpStatus.BAD_REQUEST, "Failed to create user")
    }
    
    // set id and _id as user
    studentData.id = newUser[0].id;
    studentData.user = newUser[0]._id; // reference _id
    
    // create a student user (transaction -2)
    const newStudent = await StudentModel.create([studentData], {session});

    if (!newStudent.length) {
        throw new AppError(httpStatus.BAD_REQUEST, "Failed to create student")
    }
    
    // session commit and end korlam
    await session.commitTransaction()
    await session.endSession()

    return newStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession()
  }
};

export const UserServices = {
  createStudentInfoDB,
};
