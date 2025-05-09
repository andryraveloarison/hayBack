import { Chapter } from "./Chapter";

export interface Subject {
    id?: string;
    name: string;
    level: string;            // ID du niveau (Level._id)
    chapters?: Chapter[]; // Liste des chapitres liés à la matière
  }
  