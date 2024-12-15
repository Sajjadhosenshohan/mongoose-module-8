import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createStudent = async (req: Request, res: Response)=>{

    try {
        const {password,student} = req.body;
        // validate using zod
        // const refineData = studentSchemaZod.parse(student)
        // will call services function to send this data
        // const result = await StudentServices.createStudentInfoDB(refineData)
        const result = await UserServices.createStudentInfoDB(password,student)
        
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

export const UserController = {
    createStudent
}