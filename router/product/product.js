const express = require("express");
let router = express.Router();

const productController = require("../../controller/productController")


router.get("/discounts", productController.showDiscounts)
router.get("/", productController.getAllProducts);
router.post("/", productController.addProduct);
router.get("/:id", productController.getProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);



module.exports = router;