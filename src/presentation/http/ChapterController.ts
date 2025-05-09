import express from "express";
import { ChapterRepositoryImpl } from "../../infrastructure/persistence/repositoryImpl/ChapterRepositoryImpl";
import { CreateChapter } from "../../application/usecases/Chapter/CreateChapter";
import { GetAllChapters } from "../../application/usecases/Chapter/GetAllChapters";

const router = express.Router();
const repo = new ChapterRepositoryImpl();
const createChapter = new CreateChapter(repo);
const getAllChapters = new GetAllChapters(repo);

router.post("/create", async (req, res) => {
  const chapter = await createChapter.execute(req.body);
  res.json(chapter);
});

router.get("/getAll", async (req, res) => {
  const chapters = await getAllChapters.execute();
  res.json(chapters);
});


export default router;
