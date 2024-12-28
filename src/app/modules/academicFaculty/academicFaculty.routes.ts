
import { Router } from "express";
import validateRequest from "../../utiles/validateRequest";
import { AcademicFacultyValidation } from "./academicFaculty.validation";
import { AcademicFacultyController } from "./academicFaculty.controller";

const router = Router()



router.post("/create-academic-faculty",
    validateRequest(AcademicFacultyValidation.createAcademicFaculty),
    AcademicFacultyController.createAcademicFaculty
)

// get all Academic-semester 
router.get("/", AcademicFacultyController.getAllAcademicFaculties)

// get single Academic-semester 
router.get("/:facultyId", AcademicFacultyController.getSingleAcademicFaculty)

// update single Academic-semester 
router.patch("/:facultyId",validateRequest(AcademicFacultyValidation.updateAcademicFaculty), AcademicFacultyController.updateSingleAcademicFaculty)

export const academicFacultyRoutes = router;