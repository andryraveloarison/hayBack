import { Course } from "../../../domain/entities/Course";
import { ICourseRepository } from "../../../domain/repositories/ICourseRepository";

export class GetCourseById {
  constructor(private readonly courseRepository: ICourseRepository) {}

  async execute(id: string): Promise<Course | null> {
    return await this.courseRepository.findById(id);
  }
}
