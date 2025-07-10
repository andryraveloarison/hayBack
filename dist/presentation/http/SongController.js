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
const SongRepositoryImpl_1 = require("../../infrastructure/persistence/repositoryImpl/SongRepositoryImpl");
const CreateSong_1 = require("../../application/usecases/Song/CreateSong");
const GetAllSongs_1 = require("../../application/usecases/Song/GetAllSongs");
const UpdateSong_1 = require("../../application/usecases/Song/UpdateSong");
const DeleteSong_1 = require("../../application/usecases/Song/DeleteSong");
const router = express_1.default.Router();
const repo = new SongRepositoryImpl_1.SongRepositoryImpl();
const createSong = new CreateSong_1.CreateSong(repo);
const getAllSongs = new GetAllSongs_1.GetAllSongs(repo);
const updateSong = new UpdateSong_1.UpdateSong(repo);
const deleteSong = new DeleteSong_1.DeleteSong(repo);
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json("SONG");
}));
router.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const song = yield createSong.execute(req.body);
    res.json(song);
}));
router.get("/getAll", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const songs = yield getAllSongs.execute();
    res.json(songs);
}));
router.put("/update/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updateResult = yield updateSong.execute(id, req.body);
    res.json(updateResult);
}));
router.delete("/delete/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deleteResult = yield deleteSong.execute(id);
    res.json(deleteResult);
}));
// router.post("/bulkCreate", async (req, res) => {
//   try {
//     const insertedSongs = [];
//     for (const song of songsData) {
//         const created = await createSong.execute({
//           title: song.title,
//           lyrics: song.lyrics,
//           author: ""
//         });
//         insertedSongs.push(created);
//       }
//     res.status(201).json({
//       message: `${insertedSongs.length} chansons insérées`,
//       songs: insertedSongs,
//     });
//   } catch (error) {
//     console.error("❌ Erreur lors du bulk insert :", error);
//     res.status(500).json({ message: "Erreur serveur lors du bulk insert" });
//   }
// });
exports.default = router;
