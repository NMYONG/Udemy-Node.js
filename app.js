const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const amdinData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", amdinData.routes);
app.use(shopRoutes);

// status를 호출해 상태 코드를 설정
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
