import { Request, Response } from "express";
import { StudentServices } from "./student_service";
import { studentSchemaZod } from "./student_zod_validation";
// import studentJoi_Validate_Schema from "./student_joi_validation";

const createStudent = async (req: Request, res: Response)=>{

    try {
        const student = req.body.student;

        // const { error, value } = studentJoi_Validate_Schema.validate(student);
        
        // if(error){
        //     res.status(500).json({
        //         success: false,
        //         message: "something went wrong",
        //         error: error
        //     })
        // }


        // validate using zod
        const refineData = studentSchemaZod.parse(student)
        // will call services function to send this data
        const result = await StudentServices.createStudentInfoDB(refineData)

        // send response
         res.status(200).json({
            success: true,
            message: " Successfully created student info",
            data: result
        })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "something went wrong",
                error: error
            })
    }
}

// get all students info
const getAllStudentsInfoController = async(req: Request,res: Response)=>{
    try {
        const result = await StudentServices.getAllStudentsFromDB()

    // send response
    res.status(200).json({
        success: true,
        message: "All students info",
        data: result
    })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "something went wrong",
            error: error
        })
    }
}

// get a students info
const getAStudentInfoController = async(req: Request,res: Response)=>{
    try {
        const {studentId} = req.params;
        /* console.log(studentId)*/
        const result = await StudentServices.getAStudentInfo(studentId)

    // send response
    res.status(200).json({
        success: true,
        message: "get a student info",
        data: result
    })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "something went wrong",
            error: error
        })
    }
}

// delete  a students info
const deleteStudentInfoController = async(req: Request,res: Response)=>{
    try {
        const {studentId} = req.params;
        /* console.log(studentId)*/
        const result = await StudentServices.deleteStudentInfo(studentId)

    // send response
    res.status(200).json({
        success: true,
        message: "delete a student info",
        data: result
    })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "something went wrong",
            error: error
        })
    }
}

export  const StudentController = {
    createStudent,
    getAllStudentsInfoController,
    getAStudentInfoController,
    deleteStudentInfoController
} 