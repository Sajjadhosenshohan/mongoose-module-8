
import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../utiles/validateRequest';
import { createStudentSchemaValidation } from '../student/student_zod_validation';
const router = express.Router();

router.post('/create-student',validateRequest(createStudentSchemaValidation), UserController.createStudent)

export const UserRoutes = router;