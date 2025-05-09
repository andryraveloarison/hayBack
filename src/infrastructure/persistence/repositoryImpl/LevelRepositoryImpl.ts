import LevelModel from "../models/LevelSchema";
import { Level } from "../../../domain/entities/Level";
import { ILevelRepository } from "../../../domain/repositories/ILevelRepository";

export class LevelRepositoryImpl implements ILevelRepository {

  async findAll(): Promise<Level[]> {
    const levels = await LevelModel.find().sort({ createdAt: -1 });;
    return levels.map(level => level.toObject());
  }

  async create(level: Level): Promise<Level> {
    const created = await LevelModel.create(level);
    return created.toObject();
  }


  async findById(id: string): Promise<Level | null> {
    return await LevelModel.findOne({ _id: id }).lean();
  }

  async update(id: string, userData: Partial<Level>): Promise<Level | null> {
    return await LevelModel.findByIdAndUpdate(id, userData, { new: true }).lean();
  }
  

}
