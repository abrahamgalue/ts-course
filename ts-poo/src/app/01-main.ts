import type { Product } from './models/product.model';

function delay(time: number) {
  const promise = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('hello');
    }, time);
  });
  return promise;
}

async function getProducts(): Promise<Product[]> {
  const res = await fetch('https://api.escuelajs.co/api/v1/products');
  const data = await res.json() as Product[];
  return data;
}

const rta = await delay(3000);
console.log(rta);

const products = await getProducts();
console.log(products.map((item) => `${item.id} - ${item.title}`));
