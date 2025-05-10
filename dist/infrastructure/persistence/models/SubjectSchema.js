"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const SubjectSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        unique: false, // Ex: "Mathématiques", "Histoire"
    },
    level: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Level",
        required: true,
    },
}, {
    timestamps: true, // <-- ajoute ceci
    toObject: {
        transform: (_, ret) => {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        },
    },
    toJSON: {
        transform: (_, ret) => {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        },
    },
});
exports.default = mongoose_1.default.model("Subject", SubjectSchema);
