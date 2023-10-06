const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "cart.json"
);

module.exports = class Cart {
  static addProduct(id, productPrice) {
    // Fetch the previous cart
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
    });
    // Analyze the cart => Find existing product
    const existingProductIndex = cart.products.findIndex(
      (prod) => prod.id === id
    );
    // 파일 위치를 알아내기 위해 Index
    const existingProduct = cart.products[existingProductIndex];
    let updatedProduct;
    // Add new product / increase quantitiy
    if (existingProduct) {
      updatedProduct = { ...existingProduct };
      updatedProduct.qty = updatedProduct.qty + 1;
      cart.products = [...cart.products];
      cart.products[existingProductIndex] = updatedProduct;
    } else {
      updatedProduct = { id: id, qty: 1 };
    }
    cart.totalPrice = cart.productPrice + productPrice;
    cart.products = { ...cart.products };
    fs.writeFile(p, JSON.stringify(cart), (err) => {
      console.log(err);
    });
  }
};
