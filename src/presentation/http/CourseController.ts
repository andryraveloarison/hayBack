import express from "express";
import { CourseRepositoryImpl } from "../../infrastructure/persistence/repositoryImpl/CourseRepositoryImpl";
import { CreateCourse } from "../../application/usecases/Course/CreateCourse";
import { GetAllCourses } from "../../application/usecases/Course/GetAllCourse";
import { GetCourseById } from "../../application/usecases/Course/GetCourseById"; 
import { GetCourseByChapterId } from "../../application/usecases/Course/GetCourseByChapterId";

const router = express.Router();
const repo = new CourseRepositoryImpl();
const createCourse = new CreateCourse(repo);
const getAllCourses = new GetAllCourses(repo);
const getCourseById = new GetCourseById(repo); // ✅
const getCourseByChapterId = new GetCourseByChapterId(repo)

router.post("/create", async (req, res) => {
  const course = await createCourse.execute(req.body);
  res.json(course);
});

router.get("/getAll", async (req, res) => {
  const courses = await getAllCourses.execute();
  res.json(courses);
});

// ✅ Route pour GET BY ID
router.get("/getById/:id", async (req, res) => {
  const course = await getCourseById.execute(req.params.id);
  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }
  res.json(course);
});


router.get("/getByChapterId/:id", async (req, res) => {
    const course = await getCourseByChapterId.execute(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(course);
  });
  

export default router;
