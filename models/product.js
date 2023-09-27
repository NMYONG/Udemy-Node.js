const fs = require("fs");
const path = require("path");

// 파일 경로를 생성합니다.
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

// 파일에서 제품 목록을 읽어오는 함수
const getProductsFromFile = (cb) => {
  // products.json 파일을 읽어옵니다.
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      // 오류 발생 시 빈 배열을 전달합니다.
      cb([]);
    } else {
      // 파일 내용을 JSON으로 파싱하여 콜백 함수에 전달합니다.
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(t) {
    // 생성자: 제품의 제목을 받아 인스턴스 변수에 할당합니다.
    this.title = t;
  }

  save() {
    // 현재 제품을 파일에 저장합니다.
    getProductsFromFile((products) => {
      products.push(this); // 현재 제품을 제품 목록에 추가합니다.
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err); // 오류가 있을 경우 오류를 출력합니다.
      });
    });
  }

  static fetchAll(cb) {
    // 모든 제품을 가져오는 정적 메서드
    getProductsFromFile(cb);
  }
};
