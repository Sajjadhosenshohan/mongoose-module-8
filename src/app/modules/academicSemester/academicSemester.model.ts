import { model, Schema } from "mongoose";
import { TAcademicSemister} from "./academicSemester_interface";
import { AcademicSemesterCode, AcademicSemesterName, Months } from "./academicSemester.constant";

const AcademicSemesterSchema = new Schema({
    name: {
        type: String,
        required: [true, "Semester name is required"],
        enum: AcademicSemesterName
    },
    year: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: [true, "code is required"],
        enum: AcademicSemesterCode
    },
    startMonth:{
        type: String,
        enum: Months,
        required: true
    },
    endMonth:{
        type: String,
        enum: Months,
        required: true
    }
})

// year and name checking
AcademicSemesterSchema.pre('save', async function(next){
    const isSemesterExist = await AcademicSemesterModel.findOne({
        year: this.year,
        name: this.name
    })

    if(isSemesterExist){
        throw new Error(`This semester already exist`)
    }
    next()
})

export const AcademicSemesterModel = model<TAcademicSemister>('AcademicSemester', AcademicSemesterSchema)