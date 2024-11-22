"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const student_service_1 = require("./student_service");
const student_zod_validation_1 = require("./student_zod_validation");
// import studentJoi_Validate_Schema from "./student_joi_validation";
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const refineData = student_zod_validation_1.studentSchemaZod.parse(student);
        // will call services function to send this data
        const result = yield student_service_1.StudentServices.createStudentInfoDB(refineData);
        // send response
        res.status(200).json({
            success: true,
            message: " Successfully created student info",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "something went wrong",
            error: error
        });
    }
});
// get all students info
const getAllStudentsInfoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield student_service_1.StudentServices.getAllStudentsFromDB();
        // send response
        res.status(200).json({
            success: true,
            message: "All students info",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "something went wrong",
            error: error
        });
    }
});
// get a students info
const getAStudentInfoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentId } = req.params;
        /* console.log(studentId)*/
        const result = yield student_service_1.StudentServices.getAStudentInfo(studentId);
        // send response
        res.status(200).json({
            success: true,
            message: "get a student info",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "something went wrong",
            error: error
        });
    }
});
// delete  a students info
const deleteStudentInfoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentId } = req.params;
        /* console.log(studentId)*/
        const result = yield student_service_1.StudentServices.deleteStudentInfo(studentId);
        // send response
        res.status(200).json({
            success: true,
            message: "delete a student info",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "something went wrong",
            error: error
        });
    }
});
exports.StudentController = {
    createStudent,
    getAllStudentsInfoController,
    getAStudentInfoController,
    deleteStudentInfoController
};
