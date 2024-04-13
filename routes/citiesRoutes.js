import express from 'express';
const router = express.Router();

import {
  showCities
} from '../controllers/citiesController.js';
router.route('/').get(showCities);

export default router;
