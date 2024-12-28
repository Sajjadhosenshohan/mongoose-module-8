import { TacademicFaculty } from './academicFaculty.interface';
import { AcademicFacultyModel } from './academicFaculty.model';

const createAcademicFacultyIntoDB = (payload: TacademicFaculty) => {
  const result = AcademicFacultyModel.create(payload);
  return result;
};
const getAllAcademicFacultyFromDB = () => {
  const result = AcademicFacultyModel.find({});
  return result;
};

const getSingleAcademicFacultyFromDB = (semesterId: string) => {
  const result = AcademicFacultyModel.findById({ _id: semesterId });
  return result;
};

const updateAAcademicFacultyFromDB = (
  semesterId: string,
  payload: Partial<TacademicFaculty>,
) => {
  const result = AcademicFacultyModel.findByIdAndUpdate(
    { _id: semesterId },
    { $set: payload },
    { new: true, runValidators: true },
  );
  return result;
};

export const AcademicFacultyServices = {
  createAcademicFacultyIntoDB,
  getAllAcademicFacultyFromDB,
  getSingleAcademicFacultyFromDB,
  updateAAcademicFacultyFromDB,
};
