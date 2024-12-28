"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const student_route_1 = require("../modules/student/student_route");
const user_route_1 = require("../modules/users/user.route");
const academicSemester_route_1 = require("../modules/academicSemester/academicSemester.route");
const academicFaculty_routes_1 = require("../modules/academicFaculty/academicFaculty.routes");
const acedemicDepartment_routes_1 = require("../modules/academicDepartment/acedemicDepartment.routes");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/users",
        route: user_route_1.UserRoutes
    },
    {
        path: "/students",
        route: student_route_1.studentsRoute
    },
    {
        path: "/academic-semesters",
        route: academicSemester_route_1.AcademicSemesterRoutes
    },
    {
        path: "/academic-faculties",
        route: academicFaculty_routes_1.academicFacultyRoutes
    },
    {
        path: "/academic-departments",
        route: acedemicDepartment_routes_1.AcademicDepartmentRoutes
    },
];
moduleRoutes.forEach((eachRoute) => router.use(eachRoute.path, eachRoute.route));
exports.default = router;
