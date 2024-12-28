
import status from "http-status";
import catchAsync from "../../utiles/catchAsync";
import { sendResponse } from "../../utiles/sendResponse";
import { AcademicFacultyServices } from "./academicFaculty.services";
import { TacademicFaculty } from "./academicFaculty.interface";

const createAcademicFaculty = catchAsync(
    async (req, res)=>{
        console.log(req.body)
            const result = await AcademicFacultyServices.createAcademicFacultyIntoDB(req.body)
            
            sendResponse(res, {
                success: true,
                message: "Successfully created academi faculty",
                statusCode: status.OK,
                data: result
            })
            
    }    
)


const getAllAcademicFaculties = catchAsync(
    async (req, res) =>{
        const result = await AcademicFacultyServices.getAllAcademicFacultyFromDB()

        sendResponse(res, {
            success: true,
            message: "Successfully get all academic faculties data",
            statusCode: status.OK,
            data: result
        })
    }
)

const getSingleAcademicFaculty = catchAsync(
    async (req,res)=>{
        const {facultyId} = req.params;

        const result = await AcademicFacultyServices.getSingleAcademicFacultyFromDB(facultyId)

        sendResponse(res, {
            success: true,
            message: "Successfully get single academicFaculty data",
            statusCode: status.OK,
            data: result
        })
    }
)
const updateSingleAcademicFaculty = catchAsync(
    async (req,res)=>{
        const {facultyId} = req.params;
        const payload:Partial<TacademicFaculty> = req.body;

        const result = await AcademicFacultyServices.updateAAcademicFacultyFromDB(facultyId,payload)

        sendResponse(res, {
            success: true,
            message: "Successfully updated single academic-semester data",
            statusCode: status.OK,
            data: result
        })
    }
)
export const AcademicFacultyController = {
    createAcademicFaculty,
    getAllAcademicFaculties,
    getSingleAcademicFaculty,
    updateSingleAcademicFaculty
}