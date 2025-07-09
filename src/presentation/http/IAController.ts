import express from "express";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { messages } = req.body;

    console.log(process.env.IA_KEY)
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.IA_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "meta-llama/llama-4-maverick:free",
        messages,
      }),
    });

    const data = await response.json();

    res.status(response.status).json(data);
  } catch (error) {
    console.error("Erreur proxy OpenRouter :", error);
    res.status(500).json({ error: "Erreur serveur proxy." });
  }
});

export default router;
