import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import { openai } from "../index.js";

dotenv.config();
const router = express.Router();

router.post("/text", async (req, res) => {
  try {
    const { text, activeChatId } = req.body;
    console.log(text);
    res.status(200).json({ text });
  } catch (e) {
    console.error("error: ", e);
    res.status(500).json({ error: e.message });
  }
});

export default router;
