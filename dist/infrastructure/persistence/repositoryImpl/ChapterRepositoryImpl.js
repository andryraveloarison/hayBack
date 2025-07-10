"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChapterRepositoryImpl = void 0;
const ChapterSchema_1 = __importDefault(require("../models/ChapterSchema"));
class ChapterRepositoryImpl {
    create(chapter) {
        return __awaiter(this, void 0, void 0, function* () {
            const created = yield ChapterSchema_1.default.create(chapter);
            return created.toObject();
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const chapters = yield ChapterSchema_1.default.find()
                .populate({
                path: "subject",
                populate: {
                    path: "level",
                    model: "Level"
                }
            })
                .sort({ createdAt: -1 }); // Tri décroissant par date de création
            return chapters.map(ch => ch.toObject());
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ChapterSchema_1.default.findById(id).populate("subject").lean();
        });
    }
}
exports.ChapterRepositoryImpl = ChapterRepositoryImpl;
