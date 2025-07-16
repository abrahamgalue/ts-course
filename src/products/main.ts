import { createProduct, calcStock, products } from './product.service';

createProduct({
  name: 'Product 1',
  createdAt: new Date(),
  stock: 12,
});

createProduct({
  name: 'Product 2',
  createdAt: new Date(),
  stock: 5,
  size: 'M',
});

console.log(products);
const total = calcStock();
console.log(total);
