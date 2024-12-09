import express from 'express';
import { exemploGet } from '../controllers/controller.js';

const router = express.Router();
router.get('/example', exemploGet);

export default  router;
