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
const SubjectRepositoryImpl_1 = require("../../infrastructure/persistence/repositoryImpl/SubjectRepositoryImpl");
const CreateSubject_1 = require("../../application/usecases/Subject/CreateSubject");
const GetAllSubjects_1 = require("../../application/usecases/Subject/GetAllSubjects");
const router = express_1.default.Router();
const repo = new SubjectRepositoryImpl_1.SubjectRepositoryImpl();
const createSubject = new CreateSubject_1.CreateSubject(repo);
const getAllSubjects = new GetAllSubjects_1.GetAllSubjects(repo);
router.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const subject = yield createSubject.execute(req.body);
    res.json(subject);
}));
router.get("/getAll", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const subjects = yield getAllSubjects.execute();
    res.json(subjects);
}));
exports.default = router;
