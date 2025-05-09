export interface User {
  id?: string;
  username: string;
  email: string;
  password: string;
  online: boolean;
  type: 'admin' | 'prof' | 'etudiant';
  school: string;
}
