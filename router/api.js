const express = require('express');
let router = express.Router();
const product = require('./product/product')



router.use("/product", product)



module.exports = router;