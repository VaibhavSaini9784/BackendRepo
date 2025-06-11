const express = require("express");

const getproductcontoller = require("../controllers/products/getproductcontroller");


const router = express.Router();

router.get("/", getproductcontoller);
router.get("/category/:category",getproductcontoller)
router.get("/subcategory/:subcategory",getproductcontoller)
router.get("/name/:name",getproductcontoller)
router.get("/id/:id",getproductcontoller)
router.get("/random",getproductcontoller)
router.get("/top-rated",getproductcontoller)
router.get("/lowtohigh",getproductcontoller)
router.get("/hightolow",getproductcontoller)

module.exports = router;