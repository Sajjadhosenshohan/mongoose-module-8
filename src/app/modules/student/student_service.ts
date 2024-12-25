import StudentModel from "./student_model";

// get all student info 
const getAllStudentsFromDB = async ()=>{
const result = await StudentModel.find()
return result
}

// get a student info by id
const getAStudentInfo = async (studentId:string) =>{
    const result  = await StudentModel.findOne({id: studentId})
    return result
}

// delete a student info by id
const deleteStudentInfo = async (studentId:string) =>{
    const result  = await StudentModel.updateOne({id: studentId}, {isDeleted: true})
    return result
}

export const StudentServices = {
    getAllStudentsFromDB,
    getAStudentInfo,
    deleteStudentInfo
}