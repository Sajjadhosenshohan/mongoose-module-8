
import config from "../../config";
import { Student } from "../student/student_interface";
import StudentModel from "../student/student_model";
import { NewUser } from "./user.interface";
import { User } from "./user.model";

const createStudentInfoDB = async (password: string, studentData: Student)=>{
    // create a user object
    const userData = {} as NewUser; 

    // if password is not given , use default password
    userData.password = password || (config.default_password as string)

    // set student role
    userData.role = 'student';

    // set manually generated id
    userData.id = '203010009';

    // create a user
    const newUser = await User.create(userData);

    // create a student user
    if(Object.keys(newUser).length){
        // set id and _id as user
        studentData.id = newUser.id;
        studentData.user = newUser._id // reference _id

        const newStudent = await StudentModel.create(studentData)
        return newStudent;
    }
}

export const UserServices = {
    createStudentInfoDB
}
