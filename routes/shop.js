const path = require("path");
const express = require("express");
const rooDir = require("../util/path");

const router = express.Router(); // express.Router을 호출해서 router객체 생성

router.get("/", (req, res, next) => {
  // send.File 파일 전송하기
  res.sendFile(path.join(rooDir, "views", "shop.html"));
});

module.exports = router;
