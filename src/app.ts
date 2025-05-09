import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import { connectToDatabase } from "./config/database";
import userRoutes from "./presentation/http/UserController";
import levelRoutes from "./presentation/http/LevelController";
import subjectRoutes from "./presentation/http/SubjectController"
import chapterRoutes from "./presentation/http/ChapterController"
import courseRoutes from "./presentation/http/CourseController"

import cors from "cors";

dotenv.config();
const app = express();

app.use(cors({
    origin: "*", // Remplacez par l'URL de votre frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Méthodes autorisées
    allowedHeaders: ["Content-Type", "Authorization"] // En-têtes autorisés
}));


const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

connectToDatabase();

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/levels", levelRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/chapters", chapterRoutes);
app.use("/api/courses", courseRoutes);






const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log("🚀 Server running on port", PORT));
