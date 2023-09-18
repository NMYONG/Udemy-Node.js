const path = require("path");
const express = require("express");
const rooDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router(); // express.Router을 호출해서 router객체 생성

router.get("/", (req, res, next) => {
  // console.log("shop.js", adminData.products);
  // // send.File 파일 전송하기
  // res.sendFile(path.join(rooDir, "views", "shop.html"));
  const products = adminData.products;
  res.render("shop", { prods: products, docTitle: "Shop" }); // 하나 이상의 필드를 전달할 수 있다.
});

module.exports = router;
