import { Subject } from "../../../domain/entities/Subject";
import { ISubjectRepository } from "../../../domain/repositories/ISubjectRepository";

export class CreateSubject {
  constructor(private subjectRepository: ISubjectRepository) {}

  async execute(subject: Subject): Promise<{success: Boolean}> {

    const newSubject = await this.subjectRepository.create(subject);

    return {
      success:true,
      ...newSubject,
    };
  }
}
