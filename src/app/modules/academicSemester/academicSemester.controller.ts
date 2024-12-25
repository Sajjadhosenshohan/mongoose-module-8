
import status from "http-status";
import { sendResponse } from "../../utiles/sendResponse";
import catchAsync from "../../utiles/catchAsync";
import { AcademicSemseterServices } from "./academicSemester.services";
import { TAcademicSemister } from "./academicSemester_interface";


const createAcademicSemester = catchAsync(
    async (req, res)=>{
            const result = await AcademicSemseterServices.createAcademicSemesterIntoDB(req.body)
            
            sendResponse(res, {
                success: true,
                message: "Successfully created academicSemester info",
                statusCode: status.OK,
                data: result
            })
            
    }    
)


const getAllAcademicSemester = catchAsync(
    async (req, res) =>{
        const result = await AcademicSemseterServices.getAllAcademicSemesterFromDB()

        sendResponse(res, {
            success: true,
            message: "Successfully get all academic-semester data",
            statusCode: status.OK,
            data: result
        })
    }
)

const getSingleAcademicSemester = catchAsync(
    async (req,res)=>{
        const {id} = req.params;

        const result = await AcademicSemseterServices.getSingleAcademicSemesterFromDB(id)

        sendResponse(res, {
            success: true,
            message: "Successfully get single academic-semester data",
            statusCode: status.OK,
            data: result
        })
    }
)
const updateSingleAcademicSemester = catchAsync(
    async (req,res)=>{
        const {id} = req.params;
        const payload:Partial<TAcademicSemister> = req.body;

        const result = await AcademicSemseterServices.updateAAcademicSemesterFromDB(id,payload)

        sendResponse(res, {
            success: true,
            message: "Successfully updated single academic-semester data",
            statusCode: status.OK,
            data: result
        })
    }
)
export const AcademicSemseterController = {
    createAcademicSemester,
    getAllAcademicSemester,
    getSingleAcademicSemester,
    updateSingleAcademicSemester
}