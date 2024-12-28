import mongoose from 'mongoose';
import StudentModel from './student_model';
import { AppError } from '../../errors/AppError';
import { User } from '../users/user.model';

// get all student info
const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find()
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });

  return result;
};

// get a student info by id
const getAStudentInfo = async (studentId: string) => {
  const result = await StudentModel.findOne({ id: studentId })
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};

// delete a student info by id
const deleteStudentInfo = async (studentId: string) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const deleteStudent = await StudentModel.findOneAndUpdate(
      { id: studentId },
      { isDeleted: true },
      { new: true, session },
    );

    if (!deleteStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete student');
    }

    const deleteUser = await User.findOneAndUpdate(
      { id: studentId },
      { isDeleted: true },
      { new: true, session },
    );

    if (!deleteUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete user');
    }

    await session.commitTransaction();
    await session.endSession();

    return deleteStudent;
  } catch (error: unknown) {
    await session.abortTransaction();
    await session.endSession();
  
    // Ensure the error is an instance of Error or provide a default message
    if (error instanceof Error) {
      throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
    } else {
      throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, 'An unknown error occurred');
    }
  }
  
};

export const StudentServices = {
  getAllStudentsFromDB,
  getAStudentInfo,
  deleteStudentInfo,
};
