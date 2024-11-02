import express from "express";
import { topicController } from "../controllers/topicController.js";

const router = express.Router();
router.get("/", topicController);


export default router;

