// application/usecases/chapter/GetAllChaptersUseCase.ts
import { Chapter } from "../../../domain/entities/Chapter";
import { IChapterRepository } from "../../../domain/repositories/IChapterRepository";

export class GetAllChapters {
  constructor(private chapterRepository: IChapterRepository) {}

  async execute(): Promise<Chapter[]> {
    return await this.chapterRepository.findAll();
  }
}
