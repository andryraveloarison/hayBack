// domain/repositories/IChapterRepository.ts
import { Chapter } from "../entities/Chapter";

export interface IChapterRepository {
  create(chapter: Chapter): Promise<Chapter>;
  findAll(): Promise<Chapter[]>;
  findById(id: string): Promise<Chapter | null>;
  // Tu peux ajouter update, delete, etc. plus tard
}
