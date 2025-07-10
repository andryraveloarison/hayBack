import { Song } from "../entities/Song";

export interface ISongRepository {
  create(song: Song): Promise<Song>;
  findById(id: string): Promise<Song | null>;
  findAll(): Promise<Song[]>;  
  update(id: string, songData: Partial<Song>): Promise<Song| null>;
}
