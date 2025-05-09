export interface Course {
  _id?: string;
  chapter: string;
  author: string;
  lessonPdfUrl?: string;
  exoPdfUrl?: string;
  correctionPdfUrl?: string;
  videoUrl?: string;
  createdAt?: Date;
}
