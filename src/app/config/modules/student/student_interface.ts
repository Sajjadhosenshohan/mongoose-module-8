// import { Model } from "mongoose";

import { Types } from "mongoose";

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;

  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type Student = {
  id: string;
  user: Types.ObjectId;
  password: string;
  name: UserName;
  gender: 'male' | 'female' | 'others';
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-' | undefined;
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  LocalGuardian: LocalGuardian;
  profileImg?: string | undefined;
  isDeleted: boolean;
};


// export interface StudentModelMethod extends Model<Student> {
//   isUserExists(id: string): Promise<Student | null>
// }

