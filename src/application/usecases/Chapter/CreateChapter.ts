// application/usecases/chapter/CreateChapterUseCase.ts
import { Chapter } from "../../../domain/entities/Chapter";
import { IChapterRepository } from "../../../domain/repositories/IChapterRepository";

export class CreateChapter {
  constructor(private chapterRepository: IChapterRepository) {}

  async execute(chapterData: Chapter): Promise<Chapter> {
    // Tu peux ajouter des validations ici
    if (!chapterData.title || !chapterData.subject) {
      throw new Error("Le titre et le sujet sont obligatoires");
    }

    return await this.chapterRepository.create(chapterData);
  }
}
