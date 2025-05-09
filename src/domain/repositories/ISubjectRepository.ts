import { Subject } from "../entities/Subject";

export interface ISubjectRepository {
  create(subject: Subject): Promise<Subject>;
  findById(id: string): Promise<Subject | null>;
  findAll(): Promise<Subject[]>;  
  update(id: string, subjectData: Partial<Subject>): Promise<Subject| null>;
}
