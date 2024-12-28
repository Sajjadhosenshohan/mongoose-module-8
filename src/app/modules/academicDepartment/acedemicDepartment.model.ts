import { model, Schema } from "mongoose"
import { TAcademicDepartment } from "./acedemicDepartment.interface"
import { AppError } from "../../errors/AppError"

const academicDepartmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    academicFaculty: {
        type: Schema.Types.ObjectId,
        ref: "AcademicFaculty",
        required: true,
    }
}, {
    timestamps: true
})

academicDepartmentSchema.pre("save", async function(next){
    const isDepartmentExist = await AcademicDepartmentModel.findOne({name: this.name})

    if(isDepartmentExist){
        throw new AppError(404,"This Academic-department is already exist")
    }else{
        next()
    }
})

// update 
academicDepartmentSchema.pre("findOneAndUpdate", async function(next){

    const query = this.getQuery();

    const isDepartmentExist = await AcademicDepartmentModel.findOne(query)

    if(!isDepartmentExist){
        throw new AppError(httpStatus.NOT_FOUND,"This Academic-department does not exist")
    }else{
        next()
    }
})
export const AcademicDepartmentModel = model<TAcademicDepartment>("AcademicDepartment", academicDepartmentSchema)