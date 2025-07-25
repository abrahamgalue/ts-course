import {
  addProduct,
  products,
  updateProduct,
  findProducts,
} from './products/product.service';
import { faker } from '@faker-js/faker';

for (let index = 0; index < 50; index++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    color: faker.color.rgb(),
    size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
    price: parseInt(faker.commerce.price()),
    title: faker.commerce.productName(),
    stock: faker.number.int({ min: 10, max: 100 }),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(['tag1', 'tag2', 'tag3', 'tag4']),
    categoryId: faker.string.uuid(),
  });
}

console.log(products);

const product = products[0];

updateProduct(product.id, {
  title: 'New title',
  stock: 80,
});

findProducts({
  stock: 10,
  color: 'red',
  createdAt: new Date(),
});
