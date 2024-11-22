import { Student } from "./student_interface";
import StudentModel from "./student_model";

const createStudentInfoDB = async (student: Student)=>{

    const result = await StudentModel.create(student); // build in static method

    // const studentInfo = new StudentModel(student)
    // const result = await studentInfo.save()

    return result;
}

// get all student info 
const getAllStudentsFromDB = async ()=>{
const result = await StudentModel.find()
return result
}

// get a student info by id
const getAStudentInfo = async (studentId:string) =>{
    console.log(studentId)
    const result  = await StudentModel.findOne({id: studentId})
    console.log('service ', result)
    return result
}

// delete a student info by id
const deleteStudentInfo = async (studentId:string) =>{
    // console.log(studentId)
    const result  = await StudentModel.updateOne({id: studentId}, {isDeleted: true})
    // console.log('service ', result)
    return result
}

export const StudentServices = {
    createStudentInfoDB,
    getAllStudentsFromDB,
    getAStudentInfo,
    deleteStudentInfo
}