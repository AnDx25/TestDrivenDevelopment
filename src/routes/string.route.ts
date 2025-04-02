import express from 'express';
import { StringController } from '../controllers/string.controller';
const router = express.Router();
router.post("/",StringController.addString);

export default router;