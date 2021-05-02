import express from 'express';
import SampleSchema from '../models/sample';

const router = express.Router();

// get all samples
router.get('/', (req, res, next) => {
  SampleSchema.find({}).then((sample) => {
    res.send(sample);
  });
});

export default router;
