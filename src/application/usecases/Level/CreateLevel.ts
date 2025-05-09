import { Level } from "../../../domain/entities/Level";
import { ILevelRepository } from "../../../domain/repositories/ILevelRepository";

export class CreateLevel {
  constructor(private levelRepository: ILevelRepository) {}

  async execute(level: Level): Promise<{success: Boolean}> {

    const newLevel = await this.levelRepository.create(level);

    return {
      success:true,
      ...newLevel,
    };
  }
}
