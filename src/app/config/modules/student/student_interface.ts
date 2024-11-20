export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: number;

  motherName: string;
  motherOccupation: string;
  motherContactNo: number;
};

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: number;
  address: string;
};

export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  email: string;
  contactNo: string;
  emergencyContactNo: number;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'o+' | 'o-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  LocalGuardian: LocalGuardian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};
