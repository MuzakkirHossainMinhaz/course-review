"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseRoutes = void 0;
const express_1 = require("express");
const checkValidation_1 = __importDefault(require("../../middlewares/checkValidation"));
const course_controller_1 = require("./course.controller");
const course_validation_1 = require("./course.validation");
const router = (0, express_1.Router)();
router.post("/course", (0, checkValidation_1.default)(course_validation_1.courseValidationSchemas.createCourseSchema), course_controller_1.CourseControllers.createCourse);
router.get("/courses", course_controller_1.CourseControllers.getAllCourses);
router.put("/courses/:courseId", (0, checkValidation_1.default)(course_validation_1.courseValidationSchemas.updateCourseSchema), course_controller_1.CourseControllers.updateCourseById);
router.get("/courses/:courseId/reviews", course_controller_1.CourseControllers.getCourseByIdWithReviews);
router.get("/course/best", course_controller_1.CourseControllers.getBestCourse);
exports.CourseRoutes = router;
