import { ISubjectRepository } from "../../../domain/repositories/ISubjectRepository";
import { Subject } from "../../../domain/entities/Subject";

export class GetAllSubjects {
  constructor(private subjectRepository: ISubjectRepository) {}

  async execute(): Promise<Partial<Subject>[]> {
    const subjects = await this.subjectRepository.findAll();

    return subjects;
  }
}
