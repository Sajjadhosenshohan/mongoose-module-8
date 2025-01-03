"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const validateRequest_1 = __importDefault(require("../../utiles/validateRequest"));
const student_zod_validation_1 = require("../student/student_zod_validation");
const router = express_1.default.Router();
router.post('/create-student', (0, validateRequest_1.default)(student_zod_validation_1.createStudentSchemaValidation), user_controller_1.UserController.createStudent);
exports.UserRoutes = router;
