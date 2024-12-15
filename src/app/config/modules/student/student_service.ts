import StudentModel from "./student_model";

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
    getAllStudentsFromDB,
    getAStudentInfo,
    deleteStudentInfo
}