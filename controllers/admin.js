const Product = require("../models/product"); // Product 모델을 가져옵니다.

// "Add Product" 페이지를 렌더링하는 라우트 핸들러
exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product", // 페이지 제목
    path: "/admin/add-product", // 현재 경로
    formsCSS: true, // CSS 스타일을 적용하기 위한 플래그
    productCSS: true, // CSS 스타일을 적용하기 위한 플래그
    activeAddProduct: true, // 현재 메뉴 항목을 활성화하기 위한 플래그
  });
};

// "Add Product" 폼에서 제품 정보를 받아와 데이터베이스에 저장하는 라우트 핸들러
exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title); // 요청 본문에서 제품 제목을 가져와 Product 모델을 사용해 인스턴스를 생성합니다.
  product.save(); // Product 모델의 save 메서드를 사용하여 제품 정보를 저장합니다.
  res.redirect("/"); // 홈 페이지로 리다이렉트합니다.
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};
