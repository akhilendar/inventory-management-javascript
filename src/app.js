const Inventory = require('./models/Inventory');
const Product = require('./models/Product');

const inventory = new Inventory();

const product1 = new Product('P001', 'Product 1', 100, 10);
const product2 = new Product('P002', 'Product 2', 150, 20);
const product3 = new Product('P003', 'Product 3', 200, 0);  // Out of stock

inventory.addProduct(product1);
inventory.addProduct(product2);
inventory.addProduct(product3);

console.log(`Stock for P001: ${inventory.checkStock('P001')}`); // Output: 10
console.log(`Stock for P002: ${inventory.checkStock('P002')}`); // Output: 20
console.log(`Stock for P003: ${inventory.checkStock('P003')}`); // Output: 0

try {
  inventory.sellProduct('P001', 5);
  console.log(`Sold 5 units of P001. Remaining stock: ${inventory.checkStock('P001')}`);
} catch (error) {
  console.log(error.message);
}

try {
  inventory.sellProduct('P003', 1);
} catch (error) {
  console.log(`Attempt to sell P003: ${error.message}`); // Output: Insufficient stock
}

inventory.restockProduct('P003', 10);
console.log(`Restocked P003. New stock: ${inventory.checkStock('P003')}`); // Output: 10

try {
  inventory.sellProduct('P003', 5);
  console.log(`Sold 5 units of P003. Remaining stock: ${inventory.checkStock('P003')}`); // Output: 5
} catch (error) {
  console.log(error.message);
}
