const fs = require("fs"); // file system 작업 수행하는 모듈
const path = require("path"); // 경로를 다루는 모듈

// 제품 데이터를 저장할 JSON파일 경로 정의
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data", // data/products.json
  "products.json"
);

// 파일에서 제품 목록을 읽어오는 함수
const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    // 변수로 저장한 p파일을
    if (err) {
      cb([]); // 오류 발생 시 빈 배열을 전달합니다.
    } else {
      // 파일 내용을 JSON으로 파싱하여 콜백 함수에 전달합니다.
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    // 생성자: 제품의 제목, 이미지URL, 설명, 가격을 입력 받아 인스턴스 변수에 할당합니다.
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  // 현재 제품을 파일에 저장합니다.
  save() {
    // 고유 ID를 생성합니다.
    this.id = Math.random().toString();
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

  // id, 제품 검색을 마치면 콜백
  static findById(id, cb) {
    getProductsFromFile((products) => {
      // 현재 보고있는 product가 인수로 받은 id와 같다면 상수에 저장
      const product = products.find((p) => p.id === id);
      cb(products);
    });
  }
};
