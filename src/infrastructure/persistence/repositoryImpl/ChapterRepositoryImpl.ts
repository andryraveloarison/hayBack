import ChapterModel from "../models/ChapterSchema";
import { Chapter } from "../../../domain/entities/Chapter";
import { IChapterRepository } from "../../../domain/repositories/IChapterRepository";

export class ChapterRepositoryImpl implements IChapterRepository {
  async create(chapter: Chapter): Promise<Chapter> {
    const created = await ChapterModel.create(chapter);
    return created.toObject();
  }

  async findAll(): Promise<Chapter[]> {
    const chapters = await ChapterModel.find()
      .populate({
        path: "subject",
        populate: {
          path: "level",
          model: "Level"
        }
      })
      .sort({ createdAt: -1 }); // Tri décroissant par date de création
  
    return chapters.map(ch => ch.toObject());
  }
  
  

  async findById(id: string): Promise<Chapter | null> {
    return await ChapterModel.findById(id).populate("subject").lean();
  }
}
