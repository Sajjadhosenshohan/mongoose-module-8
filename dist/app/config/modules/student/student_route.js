"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const student_controller_1 = require("./student_controller");
const router = express_1.default.Router();
router.get('/getAll-studentInfo', student_controller_1.StudentController.getAllStudentsInfoController);
router.get('/:studentId', student_controller_1.StudentController.getAStudentInfoController);
router.delete('/:studentId', student_controller_1.StudentController.deleteStudentInfoController);
exports.default = router;
