import { TAcademicDepartment } from "./acedemicDepartment.interface";
import { AcademicDepartmentModel } from "./acedemicDepartment.model";

const createAcademicDepartmentIntoDB = (payload: TAcademicDepartment) => {
  const result = AcademicDepartmentModel.create(payload);
  return result;
};
const getAllAcademicDepartmentFromDB = () => {
  const result = AcademicDepartmentModel.find({}).populate("academicFaculty");
  return result;
};

const getSingleAcademicDepartmentFromDB = (departmentId: string) => {
  const result = AcademicDepartmentModel.findById({ _id: departmentId }).populate("academicFaculty");
  return result;
};

const updateAAcademicDepartmentFromDB = (
  departmentId: string,
  payload: Partial<TAcademicDepartment>,
) => {
  const result = AcademicDepartmentModel.findOneAndUpdate(
    { _id: departmentId },
    { $set: payload },
    { new: true, runValidators: true },
  );
  return result;
};

export const AcademicDepartmentServices = {
  createAcademicDepartmentIntoDB,
  getAllAcademicDepartmentFromDB,
  getSingleAcademicDepartmentFromDB,
  updateAAcademicDepartmentFromDB,
};
