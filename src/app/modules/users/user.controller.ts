import { UserServices } from "./user.service";
import status from "http-status";
import { sendResponse } from "../../utiles/sendResponse";
import catchAsync from "../../utiles/catchAsync";

const createStudent = catchAsync(
    async (req, res)=>{

            const {password,student} = req.body;
    
            const result = await UserServices.createStudentInfoDB(password,student)
            
            sendResponse(res, {
                success: true,
                message: "Successfully created student info",
                statusCode: status.OK,
                data: result
            })
            
    }    
)
export const UserController = {
    createStudent
}