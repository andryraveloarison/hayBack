"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class LoginUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.jwtSecret = process.env.JWT_SECRET || 'your-secret-key';
    }
    execute(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield this.userRepository.findByEmail(email);
            if (!user) {
                throw new Error("Utilisateur non trouvé");
            }
            const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
            if (!isPasswordValid) {
                throw new Error("Mot de passe incorrect");
            }
            const safeUser = Object.assign({}, user);
            delete safeUser.password;
            delete safeUser.key;
            const id = (user.id || user._id);
            // ✅ Mettre à jour le champ `online` à true
            const updatedUser = yield this.userRepository.update(id, { online: true });
            if (!updatedUser) {
                throw new Error("Impossible de mettre à jour le statut de l'utilisateur");
            }
            const token = jsonwebtoken_1.default.sign({ id: updatedUser.id, email: updatedUser.email }, this.jwtSecret, { expiresIn: '1h' });
            if (safeUser.type != "admin") {
                return { success: false, token: "", user: "" };
            }
            return { success: true, token, user: safeUser };
        });
    }
}
exports.LoginUser = LoginUser;
