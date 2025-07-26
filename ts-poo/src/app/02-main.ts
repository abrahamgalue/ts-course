import { ProductHttpService } from './services/product-http.service';

const productService = new ProductHttpService();

try {
  console.log('--'.repeat(10));
  console.log('getAll()');
  const products = await productService.getAll();
  console.log(products.length);

  console.log('--'.repeat(10));
  console.log('update()');
  const productId = products[0].id;
  await productService.update(productId, {
    price: 10000,
    title: 'new title',
    description: 'new description',
  });

  console.log('--'.repeat(10));
  console.log('findOne()');
  const product = await productService.findOne(productId);
  console.log(product);
} catch (err) {
  console.error(err);
}
