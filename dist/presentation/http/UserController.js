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
const express_1 = __importDefault(require("express"));
const UserRepositoryImpl_1 = require("../../infrastructure/persistence/repositoryImpl/UserRepositoryImpl");
const CreateUser_1 = require("../../application/usecases/User/CreateUser");
const GetAllUser_1 = require("../../application/usecases/User/GetAllUser");
const GetOneUser_1 = require("../../application/usecases/User/GetOneUser");
const LoginUser_1 = require("../../application/usecases/User/LoginUser");
const router = express_1.default.Router();
const repo = new UserRepositoryImpl_1.UserRepositoryImpl();
const createUser = new CreateUser_1.CreateUser(repo);
const getAllUsers = new GetAllUser_1.GetAllUsers(repo);
const getOneUser = new GetOneUser_1.GetOneUser(repo);
const loginUser = new LoginUser_1.LoginUser(repo);
router.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield createUser.execute(req.body);
    res.json(user);
}));
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Essayer d'exécuter la connexion de l'utilisateur
        const user = yield loginUser.execute(req.body.email, req.body.password);
        // Si l'utilisateur est trouvé et connecté, envoyer l'utilisateur (sans mot de passe et clé)
        res.json(user);
    }
    catch (error) {
        // Gérer les erreurs et envoyer une réponse appropriée
        // Pour toute autre erreur, renvoyer une erreur générique
        console.error(error);
        return res.status(500).json({ message: "Une erreur interne est survenue" });
    }
}));
router.get("/getAll", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield getAllUsers.execute();
    res.json(users);
}));
router.get("/getById/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const users = yield getOneUser.execute(id);
    res.json(users);
}));
exports.default = router;
