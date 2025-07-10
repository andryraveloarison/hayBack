import { Song } from "../../../domain/entities/Song";
import { ISongRepository } from "../../../domain/repositories/ISongRepository";

export class UpdateSong {
  constructor(private songRepository: ISongRepository) {}

  async execute(id: string, data: Partial<Song>): Promise<{ success: boolean; updatedSong?: Song | null }> {
    const updatedSong = await this.songRepository.update(id, data);

    return {
      success: !!updatedSong,
      updatedSong,
    };
  }
}
