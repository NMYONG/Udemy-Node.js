const Product = require("../models/product"); // Product 모델을 가져옵니다.

// "Shop" 페이지를 렌더링하고 모든 제품 정보를 표시하는 라우트 핸들러
exports.getProducts = (req, res, next) => {
  // Product 모델의 fetchAll 메서드를 사용하여 모든 제품 정보를 가져옵니다.
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products, // 제품 정보를 템플릿에 전달
      pageTitle: "All Products",
      path: "/products",
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  console.log(prodId);
  res.redirect("/");
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Your Cart",
  });
};

exports.getOrder = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Oerders",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
