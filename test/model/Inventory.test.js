const Inventory = require('../../src/models/Inventory');
const Product = require('../../src/models/Product');

test('inventory management works correctly', () => {
  const inventory = new Inventory();
  const product = new Product('P001', 'Product 1', 100, 10);
  
  inventory.addProduct(product);
  expect(inventory.checkStock('P001')).toBe(10);

  inventory.restockProduct('P001', 5);
  expect(inventory.checkStock('P001')).toBe(15);

  inventory.sellProduct('P001', 7);
  expect(inventory.checkStock('P001')).toBe(8);

  expect(() => inventory.sellProduct('P001', 10)).toThrow('Insufficient stock');
});
