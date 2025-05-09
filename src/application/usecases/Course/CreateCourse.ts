import { Course } from "../../../domain/entities/Course";
import { ICourseRepository } from "../../../domain/repositories/ICourseRepository";

export class CreateCourse {
  constructor(private readonly courseRepository: ICourseRepository) {}

  async execute(courseData: Course): Promise<Course> {
    const createdCourse = await this.courseRepository.create(courseData);
    return createdCourse;
  }
}
