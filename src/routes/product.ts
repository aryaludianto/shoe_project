import express from 'express';
import Product from '../models/product';

const router = express.Router();

// get all samples
router.get('/', (req, res, next) => {
  Product.find({}).then((product) => {
    res.send(product);
  });
});

router.post('/addProduct', (req, res, next) => {
  console.log(req.body);

  Product.create(req.body)
    .then((product) => {
      res.send(product);
    })
    .catch(next);
});

export default router;
