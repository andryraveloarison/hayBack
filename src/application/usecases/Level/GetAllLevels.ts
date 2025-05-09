import { ILevelRepository } from "../../../domain/repositories/ILevelRepository";
import { Level } from "../../../domain/entities/Level";

export class GetAllLevels {
  constructor(private levelRepository: ILevelRepository) {}

  async execute(): Promise<Partial<Level>[]> {
    const levels = await this.levelRepository.findAll();

    return levels;
  }
}
