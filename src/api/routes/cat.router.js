import express from "express";
import { getCat } from "../controllers/cat.controller.js";
const router = express.Router();

router.get('/', getCat);

export default router;
