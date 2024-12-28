"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicFacultyRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../utiles/validateRequest"));
const academicFaculty_validation_1 = require("./academicFaculty.validation");
const academicFaculty_controller_1 = require("./academicFaculty.controller");
const router = (0, express_1.Router)();
router.post("/create-academic-faculty", (0, validateRequest_1.default)(academicFaculty_validation_1.AcademicFacultyValidation.createAcademicFaculty), academicFaculty_controller_1.AcademicFacultyController.createAcademicFaculty);
// get all Academic-semester 
router.get("/", academicFaculty_controller_1.AcademicFacultyController.getAllAcademicFaculties);
// get single Academic-semester 
router.get("/:facultyId", academicFaculty_controller_1.AcademicFacultyController.getSingleAcademicFaculty);
// update single Academic-semester 
router.patch("/:facultyId", (0, validateRequest_1.default)(academicFaculty_validation_1.AcademicFacultyValidation.updateAcademicFaculty), academicFaculty_controller_1.AcademicFacultyController.updateSingleAcademicFaculty);
exports.academicFacultyRoutes = router;
