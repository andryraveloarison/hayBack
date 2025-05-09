import express from "express";
import { SubjectRepositoryImpl } from "../../infrastructure/persistence/repositoryImpl/SubjectRepositoryImpl";
import { CreateSubject } from "../../application/usecases/Subject/CreateSubject";
import { GetAllSubjects } from "../../application/usecases/Subject/GetAllSubjects";

const router = express.Router();
const repo = new SubjectRepositoryImpl();
const createSubject = new CreateSubject(repo);
const getAllSubjects = new GetAllSubjects(repo);

router.post("/create", async (req, res) => {
  const subject = await createSubject.execute(req.body);
  res.json(subject);
});

router.get("/getAll", async (req, res) => {
  const subjects = await getAllSubjects.execute();
  res.json(subjects);
});


export default router;
