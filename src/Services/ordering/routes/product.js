var express = require("express");
const ProductController = require("../controllers/ProductController");

var router = express.Router();

router.get("/", ProductController.productList);
router.get("/:id", ProductController.productDetail);
router.post("/", ProductController.productStore);
router.put("/:id", ProductController.productUpdate);
router.delete("/:id", ProductController.productDelete);

module.exports = router;