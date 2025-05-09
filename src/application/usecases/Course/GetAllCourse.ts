import { Course } from "../../../domain/entities/Course";
import { ICourseRepository } from "../../../domain/repositories/ICourseRepository";

export class GetAllCourses {
  constructor(private readonly courseRepository: ICourseRepository) {}

  async execute(): Promise<Course[]> {
    const courses = await this.courseRepository.findAll();
    return courses;
  }
}
