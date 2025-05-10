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
const ChapterRepositoryImpl_1 = require("../../infrastructure/persistence/repositoryImpl/ChapterRepositoryImpl");
const CreateChapter_1 = require("../../application/usecases/Chapter/CreateChapter");
const GetAllChapters_1 = require("../../application/usecases/Chapter/GetAllChapters");
const router = express_1.default.Router();
const repo = new ChapterRepositoryImpl_1.ChapterRepositoryImpl();
const createChapter = new CreateChapter_1.CreateChapter(repo);
const getAllChapters = new GetAllChapters_1.GetAllChapters(repo);
router.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const chapter = yield createChapter.execute(req.body);
    res.json(chapter);
}));
router.get("/getAll", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const chapters = yield getAllChapters.execute();
    res.json(chapters);
}));
exports.default = router;
