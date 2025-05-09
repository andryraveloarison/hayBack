import { Course } from "../../../domain/entities/Course";
import { ICourseRepository } from "../../../domain/repositories/ICourseRepository";

export class GetCourseByChapterId {
  constructor(private readonly courseRepository: ICourseRepository) {}

  async execute(id: string): Promise<Course | null> {
    return await this.courseRepository.findByChapterId(id);
  }
}
