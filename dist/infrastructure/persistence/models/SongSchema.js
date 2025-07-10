"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const SongSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    lyrics: { type: String },
    author: { type: String },
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
exports.default = mongoose_1.default.model("Song", SongSchema);
