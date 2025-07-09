import express from "express";
import http from "http";
import dotenv from "dotenv";
import { connectToDatabase } from "./config/database";
import userRoutes from "./presentation/http/UserController";
import levelRoutes from "./presentation/http/LevelController";
import subjectRoutes from "./presentation/http/SubjectController"
import chapterRoutes from "./presentation/http/ChapterController"
import courseRoutes from "./presentation/http/CourseController"
import iaRoutes from "./presentation/http/IAController"
import morgan from "morgan";

import cors from "cors";

dotenv.config();
const app = express();

app.use(morgan('dev'))
app.use(cors({
    origin: "*", // Remplacez par l'URL de votre frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Méthodes autorisées
    allowedHeaders: ["Content-Type", "Authorization"] // En-têtes autorisés
}));


const server = http.createServer(app);

connectToDatabase();

app.get("/api/ia", (req, res) => {
    res.send("ça marche");
  });

app.get("/users", (req, res) => {
    res.send("users");
  });


app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/levels", levelRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/chapters", chapterRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/ia", iaRoutes);

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log("🚀 Server running on port", PORT));

export default app;

