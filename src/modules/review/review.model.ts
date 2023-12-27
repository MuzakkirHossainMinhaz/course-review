import mongoose, { Schema } from "mongoose";
import { IReview } from "./review.interface";

const reviewSchema = new mongoose.Schema<IReview>(
    {
        courseId: {
            type: Schema.Types.ObjectId,
            ref: "Course",
            required: [true, "Course Id is required"],
        },
        rating: {
            type: Number,
            enum: [1, 2, 3, 4, 5],
            required: [true, "Rating is required"],
        },
        review: {
            type: String,
            required: [true, "Review is required"],
        },
    },
    {
        versionKey: false,
    },
);

export const ReviewModel = mongoose.model<IReview>("Review", reviewSchema);