import { Router } from "express";
import { studentsRoute } from "../modules/student/student_route";
import { UserRoutes } from "../modules/users/user.route";
import { AcademicSemesterRoutes } from "../modules/academicSemester/academicSemester.route";

const router = Router()

const moduleRoutes = [
    {
        path: "/users",
        route: UserRoutes
    },
    {
        path: "/students",
        route: studentsRoute
    },
    {
        path: "/academic-semesters",
        route: AcademicSemesterRoutes
    },
]

moduleRoutes.forEach((eachRoute) => router.use(eachRoute.path, eachRoute.route))

export default router;