"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./config/database");
const UserController_1 = __importDefault(require("./presentation/http/UserController"));
const LevelController_1 = __importDefault(require("./presentation/http/LevelController"));
const SubjectController_1 = __importDefault(require("./presentation/http/SubjectController"));
const ChapterController_1 = __importDefault(require("./presentation/http/ChapterController"));
const CourseController_1 = __importDefault(require("./presentation/http/CourseController"));
const IAController_1 = __importDefault(require("./presentation/http/IAController"));
const SongController_1 = __importDefault(require("./presentation/http/SongController"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)({
    origin: "*", // Remplacez par l'URL de votre frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Méthodes autorisées
    allowedHeaders: ["Content-Type", "Authorization"] // En-têtes autorisés
}));
const server = http_1.default.createServer(app);
(0, database_1.connectToDatabase)();
app.get("/test", (req, res) => {
    res.send("ça marche");
});
app.get("/users", (req, res) => {
    res.send("users");
});
app.use(express_1.default.json());
app.use("/api/message", IAController_1.default);
app.use("/api/users", UserController_1.default);
app.use("/api/levels", LevelController_1.default);
app.use("/api/subjects", SubjectController_1.default);
app.use("/api/chapters", ChapterController_1.default);
app.use("/api/courses", CourseController_1.default);
app.use("/api/song", SongController_1.default);
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log("🚀 Server running on port", PORT));
exports.default = app;
