const Product = require("../models/product"); // Product 모델을 가져옵니다.

// "Add Product" 페이지를 렌더링하는 라우트 핸들러
exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
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

// "Shop" 페이지를 렌더링하고 모든 제품 정보를 표시하는 라우트 핸들러
exports.getProduct = (req, res, next) => {
  // Product 모델의 fetchAll 메서드를 사용하여 모든 제품 정보를 가져옵니다.
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products, // 제품 정보를 템플릿에 전달
      pageTitle: "Shop", // 페이지 제목
      path: "/", // 현재 경로
      hasProducts: products.length > 0, // 제품이 있는지 여부를 확인하는 플래그
      activeShop: true, // 현재 메뉴 항목을 활성화하기 위한 플래그
      productCSS: true, // CSS 스타일을 적용하기 위한 플래그
    });
  });
};
