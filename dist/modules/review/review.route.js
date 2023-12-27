"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewRoutes = void 0;
const express_1 = require("express");
const checkValidation_1 = __importDefault(require("../../middlewares/checkValidation"));
const review_validation_1 = __importDefault(require("./review.validation"));
const review_controller_1 = require("./review.controller");
const router = (0, express_1.Router)();
router.post("/", (0, checkValidation_1.default)(review_validation_1.default), review_controller_1.ReviewControllers.createReview);
exports.ReviewRoutes = router;
