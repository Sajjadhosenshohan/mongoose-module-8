"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicDepartmentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const academicFaculty_validation_1 = require("../academicFaculty/academicFaculty.validation");
const validateRequest_1 = __importDefault(require("../../utiles/validateRequest"));
const acedemicDepartment_controller_1 = require("./acedemicDepartment.controller");
const router = express_1.default.Router();
router.post("/create-academic-department", (0, validateRequest_1.default)(academicFaculty_validation_1.AcademicFacultyValidation.createAcademicFaculty), acedemicDepartment_controller_1.AcademicDepartmentController.createAcademicDepartment);
// get all Academic-department 
router.get("/", acedemicDepartment_controller_1.AcademicDepartmentController.getAllAcademicDepartment);
// get single Academic-department 
router.get("/:departmentId", acedemicDepartment_controller_1.AcademicDepartmentController.getSingleAcademicDepartment);
// update single Academic-department 
router.patch("/:departmentId", (0, validateRequest_1.default)(academicFaculty_validation_1.AcademicFacultyValidation.updateAcademicFaculty), acedemicDepartment_controller_1.AcademicDepartmentController.updateSingleAcademicDepartment);
exports.AcademicDepartmentRoutes = router;
