import { ISongRepository } from "../../../domain/repositories/ISongRepository";

export class DeleteSong {
  constructor(private songRepository: ISongRepository) {}

  async execute(id: string): Promise<{ success: boolean }> {
    const deleted = await this.songRepository.delete(id);

    return {
      success: deleted,
    };
  }
}
