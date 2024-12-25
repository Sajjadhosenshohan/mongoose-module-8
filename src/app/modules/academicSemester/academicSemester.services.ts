import { NameCodeMapper } from "./academicSemester.constant"
import { AcademicSemesterModel } from "./academicSemester.model"
import { TAcademicSemister } from "./academicSemester_interface"

const createAcademicSemesterIntoDB = (payload: TAcademicSemister)=>{
    // NameCodeMapper[payload.name] its the value of the key that checking payload.code value
    
    if(NameCodeMapper[payload.name] !== payload.code){
        throw new Error("Invalid Semester Code")
    }

   const result = AcademicSemesterModel.create(payload)
   return result;
}
const getAllAcademicSemesterFromDB = () =>{
    const result = AcademicSemesterModel.find({})
    return result
}

const getSingleAcademicSemesterFromDB = (id:string) =>{
    const result = AcademicSemesterModel.findById({_id: id})
    return result
}

const updateAAcademicSemesterFromDB = (id:string, payload:Partial<TAcademicSemister>) =>{
    const result = AcademicSemesterModel.findByIdAndUpdate(
        {_id: id},
        {$set: payload},
        {new: true, runValidators: true}
    )
    return result
}

export const AcademicSemseterServices = {
    createAcademicSemesterIntoDB,
    getAllAcademicSemesterFromDB,
    getSingleAcademicSemesterFromDB,
    updateAAcademicSemesterFromDB
}