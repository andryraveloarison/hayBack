import { ICourseRepository } from "../../../domain/repositories/ICourseRepository";
import { Course } from "../../../domain/entities/Course";
import CourseModel from "../models/CourseSchema";

export class CourseRepositoryImpl implements ICourseRepository {

  async create(course: Course): Promise<Course> {


    const created = await CourseModel.create(course);
    return created.toObject();
  }

  async findAll(): Promise<Course[]> {
    const courses = await CourseModel.find().populate("chapter").populate("author").sort({ createdAt: -1 });;
    return courses.map(course => course.toObject());
  }

  async findById(id: string): Promise<Course | null> {
    const course = await CourseModel.findById(id);
    return course ? course.toObject() : null;
  }


  async findByChapterId(chapterId: string): Promise<Course | null> {
    return await CourseModel.findOne({ chapter: chapterId })
      .sort({ createdAt: -1 })
      .populate("chapter") // récupère le chapitre complet
      .lean();
  }
  
  
}
