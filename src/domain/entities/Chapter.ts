import { Course } from "./Course";

export interface Chapter {
  id?: string;
  title: string;
  description: string;
  subject: string;        // ID de la matière
  order?: number; // Position du cours dans la partie
  course?: Course[];         // Liste des cours dans le chapitre
}
