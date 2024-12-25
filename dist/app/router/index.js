"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const student_route_1 = require("../modules/student/student_route");
const user_route_1 = require("../modules/users/user.route");
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
];
moduleRoutes.forEach((eachRoute) => router.use(eachRoute.path, eachRoute.route));
// router.use('/students', studentsRoute)
// router.use('/users', UserRoutes)
exports.default = router;
