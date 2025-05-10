import express from "express";
import { LevelRepositoryImpl } from "../../infrastructure/persistence/repositoryImpl/LevelRepositoryImpl";
import { CreateLevel } from "../../application/usecases/Level/CreateLevel";
import { GetAllLevels } from "../../application/usecases/Level/GetAllLevels";

const router = express.Router();
const repo = new LevelRepositoryImpl();
const createUser = new CreateLevel(repo);
const getAllLevels = new GetAllLevels(repo);

router.get("/", async (req, res) => {
  res.json("LEVEL");
  
});

router.post("/create", async (req, res) => {
  const user = await createUser.execute(req.body);
  res.json(user);

});

router.get("/getAll", async (req, res) => {
  const users = await getAllLevels.execute();
  res.json(users);
});




export default router;
