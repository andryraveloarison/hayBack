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
const express_1 = __importDefault(require("express"));
const CourseRepositoryImpl_1 = require("../../infrastructure/persistence/repositoryImpl/CourseRepositoryImpl");
const CreateCourse_1 = require("../../application/usecases/Course/CreateCourse");
const GetAllCourse_1 = require("../../application/usecases/Course/GetAllCourse");
const GetCourseById_1 = require("../../application/usecases/Course/GetCourseById");
const GetCourseByChapterId_1 = require("../../application/usecases/Course/GetCourseByChapterId");
const router = express_1.default.Router();
const repo = new CourseRepositoryImpl_1.CourseRepositoryImpl();
const createCourse = new CreateCourse_1.CreateCourse(repo);
const getAllCourses = new GetAllCourse_1.GetAllCourses(repo);
const getCourseById = new GetCourseById_1.GetCourseById(repo); // ✅
const getCourseByChapterId = new GetCourseByChapterId_1.GetCourseByChapterId(repo);
router.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const course = yield createCourse.execute(req.body);
    res.json(course);
}));
router.get("/getAll", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const courses = yield getAllCourses.execute();
    res.json(courses);
}));
// ✅ Route pour GET BY ID
router.get("/getById/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const course = yield getCourseById.execute(req.params.id);
    if (!course) {
        return res.status(404).json({ message: "Course not found" });
    }
    res.json(course);
}));
router.get("/getByChapterId/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const course = yield getCourseByChapterId.execute(req.params.id);
    if (!course) {
        return res.status(404).json({ message: "Course not found" });
    }
    res.json(course);
}));
exports.default = router;
