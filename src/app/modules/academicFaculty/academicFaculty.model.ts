import { model, Schema } from "mongoose"
import { TacademicFaculty } from "./academicFaculty.interface"

const academicFacultySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
})

export const AcademicFacultyModel = model<TacademicFaculty>("AcademicFaculty", academicFacultySchema)