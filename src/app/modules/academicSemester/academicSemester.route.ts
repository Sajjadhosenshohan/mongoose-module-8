import express from "express";
import { AcademicSemseterController } from "./academicSemester.controller";
import validateRequest from "../../utiles/validateRequest";
import { AcademicSemesters } from "./academicSemester.validation";
const router = express.Router();

router.post("/create-academic-semester",
    validateRequest(AcademicSemesters.createAcademicSemesterValidation),
    AcademicSemseterController.createAcademicSemester
)

// get all Academic-semester 
router.get("/", AcademicSemseterController.getAllAcademicSemester)

// get single Academic-semester 
router.get("/:semesterId", AcademicSemseterController.getSingleAcademicSemester)

// update single Academic-semester 
router.patch("/:semesterId",validateRequest(AcademicSemesters.updateAcademicSemesterValidation), AcademicSemseterController.updateSingleAcademicSemester)


export const AcademicSemesterRoutes = router;