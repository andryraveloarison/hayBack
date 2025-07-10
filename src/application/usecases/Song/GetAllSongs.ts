import { ISongRepository } from "../../../domain/repositories/ISongRepository";
import { Song } from "../../../domain/entities/Song";

export class GetAllSongs {
  constructor(private songRepository: ISongRepository) {}

  async execute(): Promise<Partial<Song>[]> {
    const songs = await this.songRepository.findAll();

    return songs;
  }
}
