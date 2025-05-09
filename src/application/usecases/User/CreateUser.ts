import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { User } from "../../../domain/entities/User";
import bcrypt from "bcrypt";

export class CreateUser {
  constructor(private userRepository: IUserRepository) {}

  async execute(user: User): Promise<{success: Boolean}> {
    // Hachage du mot de passe
    user.password = await bcrypt.hash(user.password, 10);
    user.type = "etudiant"


    const createdUser = await this.userRepository.create(user);

    return {
      success:true,
      ...createdUser,
    };
  }
}
