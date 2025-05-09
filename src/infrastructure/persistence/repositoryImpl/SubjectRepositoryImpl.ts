import SubjectModel from "../models/SubjectSchema";
import { Subject } from "../../../domain/entities/Subject";
import { ISubjectRepository } from "../../../domain/repositories/ISubjectRepository";

export class SubjectRepositoryImpl implements ISubjectRepository {

  async findAll(): Promise<Subject[]> {
    const subjects = await SubjectModel.find().populate("level");
    return subjects.map(subject => subject.toObject());
  }

  async create(subject: Subject): Promise<Subject> {
    const created = await SubjectModel.create(subject);
    return created.toObject();
  }


  async findById(id: string): Promise<Subject | null> {
    return await SubjectModel.findOne({ _id: id }).lean();
  }

  async update(id: string, subjectData: Partial<Subject>): Promise<Subject | null> {
    return await SubjectModel.findByIdAndUpdate(id, subjectData, { new: true }).lean();
  }
  

}
