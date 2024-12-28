
import status from "http-status";
import { sendResponse } from "../../utiles/sendResponse";
import catchAsync from "../../utiles/catchAsync";
import { AcademicDepartmentServices } from "./acedemicDepartment.services";
import { TAcademicDepartment } from "./acedemicDepartment.interface";

const createAcademicDepartment = catchAsync(
    async (req, res)=>{
            const result = await AcademicDepartmentServices.createAcademicDepartmentIntoDB(req.body)
            
            sendResponse(res, {
                success: true,
                message: "Successfully created Academic Department",
                statusCode: status.OK,
                data: result
            })
            
    }    
)


const getAllAcademicDepartment = catchAsync(
    async (req, res) =>{
        const result = await AcademicDepartmentServices.getAllAcademicDepartmentFromDB()

        sendResponse(res, {
            success: true,
            message: "Successfully get all academic-Department data",
            statusCode: status.OK,
            data: result
        })
    }
)

const getSingleAcademicDepartment = catchAsync(
    async (req,res)=>{
        const {departmentId} = req.params;

        const result = await AcademicDepartmentServices.getSingleAcademicDepartmentFromDB(departmentId)

        sendResponse(res, {
            success: true,
            message: "Successfully get single academic-Department data",
            statusCode: status.OK,
            data: result
        })
    }
)
const updateSingleAcademicDepartment = catchAsync(
    async (req,res)=>{
        const {departmentId} = req.params;
        const payload:Partial<TAcademicDepartment> = req.body;

        const result = await AcademicDepartmentServices.updateAAcademicDepartmentFromDB(departmentId,payload)

        sendResponse(res, {
            success: true,
            message: "Successfully updated single academic-Department data",
            statusCode: status.OK,
            data: result
        })
    }
)
export const AcademicDepartmentController = {
    createAcademicDepartment,
    getAllAcademicDepartment,
    getSingleAcademicDepartment,
    updateSingleAcademicDepartment
}