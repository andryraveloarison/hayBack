import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
  {
    chapter: { type: mongoose.Schema.Types.ObjectId, ref: "Chapter", required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    lessonPdfUrl: { type: String, default: null },
    exoPdfUrl: { type: String, default: null },
    correctionPdfUrl: { type: String, default: null },
    videoUrl: { type: String, default: null },
    createdAt: { type: Date, default: Date.now },
  },
  {
    toObject: {
      transform: (_, ret) => {
        ret._id = ret._id?.toString();
        delete ret.__v;
      },
    },
    toJSON: {
      transform: (_, ret) => {
        ret._id = ret._id?.toString();
        delete ret.__v;
      },
    },
  }
);

export default mongoose.model("Course", CourseSchema);
