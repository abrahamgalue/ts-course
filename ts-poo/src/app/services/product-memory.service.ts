import { faker } from '@faker-js/faker';
import type { Product } from '../models/product.model';
import type { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import type { ProductService } from '../models/product.service.model';

export class ProductMemoryService implements ProductService {
  private products: Product[] = [];

  getAll() {
    return this.products;
  }

  create(data: CreateProductDto): Product {
    const newProduct = {
      ...data,
      id: faker.number.int(),
      category: {
        id: data.categoryId,
        slug: faker.lorem.slug(),
        name: faker.commerce.department(),
        creationAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        image: faker.image.url(),
      },
    };
    return this.add(newProduct);
  }

  add(product: Product) {
    this.products.push(product);

    return product;
  }

  update(id: Product['id'], changes: UpdateProductDto) {
    const index = this.products.findIndex((item) => item.id === id);
    const prevData = this.products[index];
    this.products[index] = {
      ...prevData,
      ...changes,
    };

    return this.products[index];
  }

  findOne(id: Product['id']) {
    return this.products.find((item) => item.id === id);
  }
}
