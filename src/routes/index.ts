import { Router } from "express";
import { CourseRoutes } from "../modules/course/course.route";
import { CategoryRoutes } from "../modules/category/category.route";
import { ReviewRoutes } from "../modules/review/review.route";

const router = Router();

router.use("/", CourseRoutes);
router.use("/categories", CategoryRoutes);
router.use("/reviews", ReviewRoutes);

export default router;
