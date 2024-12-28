"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemesterRoutes = void 0;
const express_1 = __importDefault(require("express"));
const academicSemester_controller_1 = require("./academicSemester.controller");
const validateRequest_1 = __importDefault(require("../../utiles/validateRequest"));
const academicSemester_validation_1 = require("./academicSemester.validation");
const router = express_1.default.Router();
router.post("/create-academic-semester", (0, validateRequest_1.default)(academicSemester_validation_1.AcademicSemesters.createAcademicSemesterValidation), academicSemester_controller_1.AcademicSemseterController.createAcademicSemester);
// get all Academic-semester 
router.get("/", academicSemester_controller_1.AcademicSemseterController.getAllAcademicSemester);
// get single Academic-semester 
router.get("/:semesterId", academicSemester_controller_1.AcademicSemseterController.getSingleAcademicSemester);
// update single Academic-semester 
router.patch("/:semesterId", (0, validateRequest_1.default)(academicSemester_validation_1.AcademicSemesters.updateAcademicSemesterValidation), academicSemester_controller_1.AcademicSemseterController.updateSingleAcademicSemester);
exports.AcademicSemesterRoutes = router;
