import { Course } from "../entities/Course";

export interface ICourseRepository {
  create(course: Course): Promise<Course>;
  findAll(): Promise<Course[]>;
  findById(id: string): Promise<Course | null>; 
  findByChapterId(id: string): Promise<Course | null>;
}
