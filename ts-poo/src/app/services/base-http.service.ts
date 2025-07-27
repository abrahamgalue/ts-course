import type { Product } from '../models/product.model';
import type { Category } from '../models/category.model';

export class BaseHttpService<T> {
  // data: T[] = [];

  constructor(private url: string) {}

  async getAll() {
    const res = await fetch(this.url);
    const data = (await res.json()) as T[];

    return data;
  }
}

// const service = new BaseHttpService<string>();
// service.getAll();

// const service1 = new BaseHttpService<Category>();
// service1.getAll();

const url1 = 'https://api.escuelajs.co/api/v1/products';
const productService = new BaseHttpService<Product>(url1);

const products = await productService.getAll();
console.log('products:', products.length);

const url2 = 'https://api.escuelajs.co/api/v1/categories';
const categoryService = new BaseHttpService<Category>(url2);

const categories = await categoryService.getAll();
console.log('categories:', categories.length);
