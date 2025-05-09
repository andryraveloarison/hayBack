import { Level } from "../entities/Level";

export interface ILevelRepository {
  create(level: Level): Promise<Level>;
  findById(id: string): Promise<Level | null>;
  findAll(): Promise<Level[]>;  
  update(id: string, levelData: Partial<Level>): Promise<Level| null>;
}
