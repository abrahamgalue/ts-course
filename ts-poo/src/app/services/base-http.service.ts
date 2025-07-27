import type { Product } from '../models/product.model';
import type { Category } from '../models/category.model';
import type { UpdateProductDto } from '../dtos/product.dto';

export class BaseHttpService<T> {
  // data: T[] = [];

  constructor(protected url: string) {}

  async getAll() {
    const res = await fetch(this.url);
    const data = (await res.json()) as T[];

    return data;
  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    const res = await fetch(`${this.url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(changes),
    });
    const data = await res.json();

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

productService.update<Product['id'], UpdateProductDto>(1, {
  title: 'something',
});

const url2 = 'https://api.escuelajs.co/api/v1/categories';
const categoryService = new BaseHttpService<Category>(url2);

const categories = await categoryService.getAll();
console.log('categories:', categories.length);
