import { TAcademicSemister } from "../academicSemester/academicSemester_interface";
import { User } from "./user.model";

// find last student id
const findStudentId = async () =>{
    const lastStudent = await User.findOne({
        role: "student"
    }).select(
        {id: 1, _id: 0}
    ).sort({createdAt:-1}).lean();

    if(lastStudent?.id){
        return lastStudent?.id
    }
    return undefined;
}

export const generatedStudentId = async (payload: TAcademicSemister)=>{
    // first time 0000
    let currentId = (0).toString();

    // 2030 02 0001
    const lastStudentId = await findStudentId()
    const lastStudentYear = lastStudentId?.substring(0,4)
    const lastStudentSemesterCode = lastStudentId?.substring(4,6)

    // current year and code
    const currentSemesterCode = payload.code;
    const currentYear = payload.year;

    if(lastStudentId && lastStudentSemesterCode === currentSemesterCode && lastStudentYear === currentYear){
        currentId = lastStudentId.substring(6)
    }



    let incrementId =  (parseInt(currentId) + 1).toString().padStart(4, '0')

    incrementId = `${payload.year}${payload.code}${incrementId}`

    return incrementId
}