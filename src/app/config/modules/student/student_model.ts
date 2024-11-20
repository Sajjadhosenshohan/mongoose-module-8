import { Schema, model} from 'mongoose';
import { Guardian, LocalGuardian, Student, UserName} from './student_interface';

const userSchema = new Schema<UserName>(
  {
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
  }
)

const guardianSchema = new Schema<Guardian>(
  {
    fatherName: {type: String, required: true},
    fatherOccupation: {type: String, required: true},
    fatherContactNo: {type: Number, required: true},
    
    motherName: {type: String, required: true},
    motherOccupation: {type: String, required: true},
    motherContactNo: {type: Number, required: true},
  }
)

const localGuardianSchema = new Schema<LocalGuardian>(
  {
    name: {type: String, required: true},
    occupation: {type: String, required: true},
    contactNo: {type: Number, required: true},
    address: {type: String, required: true},
  }
)
const studentSchema = new Schema<Student>({
    id: {type: String},
  name: userSchema,
  gender: ['male', 'female'],
  email: {type: String , required: true},
  contactNo: {type: String, required: true},
  emergencyContactNo: {type: Number, required: true},
  bloodGroup: ['A+' , 'A-' , 'B+' , 'B-' , 'AB+' , 'AB-' , 'o+' , 'o-'],
  presentAddress: {type: String, required: true},
  permanentAddress: {type: String, required: true},
  guardian: guardianSchema,
  LocalGuardian: localGuardianSchema,
  profileImg: {type: String},
  isActive: ['active' , 'blocked']
})

const Student = model<Student>('Student', studentSchema)