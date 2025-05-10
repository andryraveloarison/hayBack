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
exports.CourseRepositoryImpl = void 0;
const CourseSchema_1 = __importDefault(require("../models/CourseSchema"));
class CourseRepositoryImpl {
    create(course) {
        return __awaiter(this, void 0, void 0, function* () {
            const created = yield CourseSchema_1.default.create(course);
            return created.toObject();
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const courses = yield CourseSchema_1.default.find().populate("chapter").populate("author").sort({ createdAt: -1 });
            ;
            return courses.map(course => course.toObject());
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const course = yield CourseSchema_1.default.findById(id);
            return course ? course.toObject() : null;
        });
    }
    findByChapterId(chapterId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield CourseSchema_1.default.findOne({ chapter: chapterId })
                .sort({ createdAt: -1 })
                .populate("chapter") // récupère le chapitre complet
                .lean();
        });
    }
}
exports.CourseRepositoryImpl = CourseRepositoryImpl;
