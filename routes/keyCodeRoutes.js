import express from 'express';
const router = express.Router();

import {
  showKeyCode
} from '../controllers/keyCodeController.js';
router.route('/').get(showKeyCode);

export default router;
