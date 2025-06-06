"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = () => {
    const jwtSecret = process.env.JWT_SECRET || "supersecret";
    return (req, res, next) => {
        var _a;
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Token manquant" });
        }
        try {
            const decoded = jsonwebtoken_1.default.verify(token, jwtSecret);
            req.params = decoded; // Associe l'utilisateur décodé à la requête
            next();
        }
        catch (err) {
            return res.status(401).json({ message: "Token invalide" });
        }
    };
};
exports.authMiddleware = authMiddleware;
