const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Express 앱을 생성하여 app 상수에 저장하면 전체 구성 값을 설정할 수 있다.
app.set("view engine", "pug");
// Express에게 view를 찾을 지점을 알려줌
app.set("views", "views");

const amdinData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const { engine } = require("express-handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", amdinData.routes);
app.use(shopRoutes);

// status를 호출해 상태 코드를 설정
app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404");
});

app.listen(3000);
