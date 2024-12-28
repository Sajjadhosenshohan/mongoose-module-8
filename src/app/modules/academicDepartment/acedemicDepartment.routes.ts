import express from "express";
import { AcademicFacultyValidation } from "../academicFaculty/academicFaculty.validation";
import validateRequest from "../../utiles/validateRequest";
import { AcademicDepartmentController } from "./acedemicDepartment.controller";
const router = express.Router();

router.post("/create-academic-department",
    validateRequest(AcademicFacultyValidation.createAcademicFaculty),
    AcademicDepartmentController.createAcademicDepartment)

// get all Academic-department 
router.get("/", AcademicDepartmentController.getAllAcademicDepartment)

// get single Academic-department 
router.get("/:departmentId", AcademicDepartmentController.getSingleAcademicDepartment)

// update single Academic-department 
router.patch("/:departmentId",validateRequest(AcademicFacultyValidation.updateAcademicFaculty), AcademicDepartmentController.updateSingleAcademicDepartment)


export const AcademicDepartmentRoutes = router;