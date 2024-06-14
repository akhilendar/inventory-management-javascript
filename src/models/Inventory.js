class Inventory {
    constructor() {
      this.products = {};
    }
  
    addProduct(product) {
      this.products[product.code] = product;
    }
  
    restockProduct(code, quantity) {
      if (this.products[code]) {
        this.products[code].stock += quantity;
      }
    }
  
    sellProduct(code, quantity) {
      if (this.products[code] && this.products[code].stock >= quantity) {
        this.products[code].stock -= quantity;
      } else {
        throw new Error('Insufficient stock');
      }
    }
  
    checkStock(code) {
      if (this.products[code]) {
        return this.products[code].stock;
      }
      return 0;
    }
  }
  
  module.exports = Inventory;
  