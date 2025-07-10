import { Song } from "../../../domain/entities/Song";
import { ISongRepository } from "../../../domain/repositories/ISongRepository";

export class CreateSong {
  constructor(private songRepository: ISongRepository) {}

  async execute(song: Song): Promise<{success: Boolean}> {

    const newSong = await this.songRepository.create(song);

    return {
      success:true,
      ...newSong,
    };
  }
}
