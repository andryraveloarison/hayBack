"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CourseSchema = new mongoose_1.default.Schema({
    chapter: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Chapter", required: true },
    author: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User", required: true },
    lessonPdfUrl: { type: String, default: null },
    exoPdfUrl: { type: String, default: null },
    correctionPdfUrl: { type: String, default: null },
    videoUrl: { type: String, default: null },
    createdAt: { type: Date, default: Date.now },
}, {
    toObject: {
        transform: (_, ret) => {
            var _a;
            ret._id = (_a = ret._id) === null || _a === void 0 ? void 0 : _a.toString();
            delete ret.__v;
        },
    },
    toJSON: {
        transform: (_, ret) => {
            var _a;
            ret._id = (_a = ret._id) === null || _a === void 0 ? void 0 : _a.toString();
            delete ret.__v;
        },
    },
});
exports.default = mongoose_1.default.model("Course", CourseSchema);
