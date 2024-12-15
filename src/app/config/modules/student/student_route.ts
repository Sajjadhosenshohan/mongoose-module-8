import express from 'express'
import { StudentController } from './student_controller';

const router =  express.Router();

router.get('/getAll-studentInfo', StudentController.getAllStudentsInfoController)
router.get('/:studentId', StudentController.getAStudentInfoController)
router.delete('/:studentId', StudentController.deleteStudentInfoController)

export default router;