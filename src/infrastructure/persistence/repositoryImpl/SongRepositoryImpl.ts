import SongModel from "../models/SongSchema";
import { Song } from "../../../domain/entities/Song";
import { ISongRepository } from "../../../domain/repositories/ISongRepository";

export class SongRepositoryImpl implements ISongRepository {

  async findAll(): Promise<Song[]> {
    const songs = await SongModel.find().sort({ createdAt: -1 });;
    return songs.map(song => song.toObject());
  }

  async create(song: Song): Promise<Song> {
    const created = await SongModel.create(song);
    return created.toObject();
  }


  async findById(id: string): Promise<Song | null> {
    return await SongModel.findOne({ _id: id }).lean();
  }

  async update(id: string, userData: Partial<Song>): Promise<Song | null> {
    return await SongModel.findByIdAndUpdate(id, userData, { new: true }).lean();
  }

  async delete(id: string): Promise<boolean> {
    const result = await SongModel.findByIdAndDelete(id);
    return !!result;
  }
  
  

}
