"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
const express_1 = require("express");
const checkValidation_1 = __importDefault(require("../../middlewares/checkValidation"));
const category_validation_1 = __importDefault(require("./category.validation"));
const category_controller_1 = require("./category.controller");
const router = (0, express_1.Router)();
router.post("/", (0, checkValidation_1.default)(category_validation_1.default), category_controller_1.CategoryControllers.createCategory);
router.get("/", category_controller_1.CategoryControllers.getAllCategories);
exports.CategoryRoutes = router;
