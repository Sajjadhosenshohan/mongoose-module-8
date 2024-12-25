import { StudentServices } from './student_service';
import status from 'http-status';
import { sendResponse } from '../../utiles/sendResponse';
import catchAsync from '../../utiles/catchAsync';


// get all students info
const getAllStudentsInfoController = catchAsync(async (req,res) => {
      const result = await StudentServices.getAllStudentsFromDB();
  
      sendResponse(res, {
        success: true,
        message: 'All students info',
        statusCode: status.OK,
        data: result,
      });
    
  }
)

// get a students info
const getAStudentInfoController = catchAsync(
  async (
    req,
    res,
  ) => {
  
      const { studentId } = req.params;
      /* console.log(studentId)*/
      const result = await StudentServices.getAStudentInfo(studentId);
      
      sendResponse(res, {
        success: true,
        message: 'get a student info',
        statusCode: status.OK,
        data: result,
      });
    
  }
)

// delete  a students info
const deleteStudentInfoController = catchAsync(
  async (
    req,
    res
  ) => {
      const { studentId } = req.params;
      const result = await StudentServices.deleteStudentInfo(studentId);
  
      sendResponse(res, {
        success: true,
        message: 'delete a student info',
        statusCode: status.OK,
        data: result,
      })
  }
)

export const StudentController = {
  getAllStudentsInfoController,
  getAStudentInfoController,
  deleteStudentInfoController,
};
